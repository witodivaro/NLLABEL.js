import { promises as fs } from "fs";
import path from "path";
import xss from "xss";

export const getRootPath = () => {
  const splitPath = __dirname.split(path.sep);
  const nextFolder = splitPath.indexOf(".next");
  const rootPath = splitPath.slice(0, nextFolder).join(path.sep);

  return rootPath;
};

export const getImgPath = (photoPath) => {
  const paths = photoPath.split(path.sep);
  const filename = paths[paths.length - 1];
  const rootPath = getRootPath();
  const fullImgPath = path.resolve(
    rootPath,
    "public",
    "img",
    "uploaded",
    filename
  );

  const imgFolder = path.resolve(rootPath, "public");
  const relativeImgPath = [
    "/",
    path.relative(imgFolder, fullImgPath).split(path.sep).join("/"),
  ].join("");

  return [fullImgPath, relativeImgPath];
};

export const uploadImgFromFile = async (file) => {
  const [fullImgPath, relativeImgPath] = getImgPath(file.name);

  await fs.rename(file.path, fullImgPath);

  return relativeImgPath;
};

export const protectObjectXss = (obj) => {
  if (typeof obj !== "object") throw new Error("Received a non-object type");

  return Object.keys(obj).reduce((protectedObj, key) => {
    const value = obj[key];

    if (typeof value === "object") {
      protectedObj[key] = protectObjectXss(value);
    } else if (typeof value === "string") {
      protectedObj[key] = xss(value);
    } else {
      protectedObj[key] = value;
    }

    return protectedObj;
  }, {});
};
