import sharp from "sharp";
import sizeOf from "image-size";

import { createMiddleware } from "../../middleware/createMiddleware";
import fileMiddleware from "../../middleware/file.middleware";

import { multiplyInt, parseObjNumbers } from "../../utils/utils";
import { getImgPath } from "../utils/utils";

const postCrop = async (req, res) => {
  try {
    const { height, width, top, left, imageWidth } = parseObjNumbers(req.body);
    const { photo } = req.files;

    const customPhotoName = photo.name + Date.now();

    const [imgPath, relativeImgPath] = getImgPath(customPhotoName);
    const actualDimensions = sizeOf(photo.path);
    const multiplier = actualDimensions.width / imageWidth;

    await sharp(photo.path)
      .extract({
        height: multiplyInt(height, multiplier),
        width: multiplyInt(width, multiplier),
        top: multiplyInt(top, multiplier),
        left: multiplyInt(left, multiplier),
      })
      .toFile(imgPath);

    res.status(200).json({ path: relativeImgPath });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

export default createMiddleware([fileMiddleware, postCrop]);
