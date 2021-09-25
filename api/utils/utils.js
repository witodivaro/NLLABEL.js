import { promises as fs } from "fs";
import path from "path";

export const getRootPath = () => {
  const splitPath = __dirname.split(path.sep);
  const nextFolder = splitPath.indexOf(".next");
  const rootPath = splitPath.slice(0, nextFolder).join(path.sep);

  return rootPath;
};

export const getImgPath = (filename) => {
  const rootPath = getRootPath();
  const fullImgPath = path.resolve(rootPath, "public", "img", filename);

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
