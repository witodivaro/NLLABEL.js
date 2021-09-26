import { promises as fs } from "fs";
import path from "path";

export const getRootPath = () => {
  const splitPath = __dirname.split(path.sep);
  const nextFolder = splitPath.indexOf(".next");
  const rootPath = splitPath.slice(0, nextFolder).join(path.sep);

  return rootPath;
};

export const getImgPath = (photo) => {
  const filenameParts = photo.name.split(".");
  const extension = filenameParts[filenameParts.length - 1];
  const paths = photo.path.split(path.sep);
  const filename = [paths[paths.length - 1], extension].join(".");
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
