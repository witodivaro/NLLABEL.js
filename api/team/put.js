import { promises as fs } from "fs";
import path from "path";

import database from "../../database/database";
import authMiddleware from "../../middleware/auth.middleware";
import { createMiddleware } from "../../middleware/createMiddleware";
import fileMiddleware from "../../middleware/file.middleware";

import { uploadImgFromFile } from "../utils/utils";

const putTeam = async (req, res) => {
  try {
    const { _id, description, name, position, img } = req.body;

    const update = {
      _id,
      description,
      name,
      position,
      img,
    };

    const { photo } = req.files;

    if (photo) update.img = await uploadImgFromFile(photo);

    const member = await database.updateOne("team", _id, update);
    res.status(200).json({ member });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export default createMiddleware([authMiddleware, fileMiddleware, putTeam]);
