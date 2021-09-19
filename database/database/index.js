import { converters } from "./converters";

const fs = require("fs").promises;
const path = require("path");

class Database {
  constructor() {
    this._dataPath = path.resolve("database", "data");
    this.DATA_EXPIRY_TIME = 1000 * 60 * 60;
    this._timeouts = {};
    this.data = {};
  }

  _getFilePath(collection) {
    return path.resolve(this._dataPath, `${collection}.json`);
  }

  async _load(collection) {
    const pathname = this._getFilePath(collection);

    const data = await fs.readFile(pathname, { encoding: "utf-8" });

    this.data[collection] = JSON.parse(data);

    const timeout = setTimeout(
      this._clearData.bind(this, collection),
      this.DATA_EXPIRY_TIME
    );

    this._timeouts[collection] = timeout;
  }

  async _clearData(collection) {
    if (this._timeouts[collection]) {
      clearTimeout(this._timeouts[collection]);
    }

    this.data[collection] = null;
  }

  async _writeData(collection, data) {
    const pathname = this._getFilePath(collection);

    await fs.writeFile(pathname, data);
  }

  async get(collection, format = "object") {
    if (!this.data[collection]) {
      await this._load(collection);
    }

    return converters[format](this.data[collection]);
  }

  async update(collection, data) {
    await this._writeData(collection, JSON.stringify(data));

    this._clearData(collection);
  }

  async insertMany(collection, data) {}
}

export default new Database();