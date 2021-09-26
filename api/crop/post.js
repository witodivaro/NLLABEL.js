import sharp from "sharp";
import sizeOf from "image-size";

import { createMiddleware } from "../../middleware/createMiddleware";
import fileMiddleware from "../../middleware/file.middleware";

import { multiplyInt, parseObjNumbers } from "../../utils/utils";
import { getImgPath } from "../utils/utils";

import logger from "../../utils/logger";
import authMiddleware from "../../middleware/auth.middleware";

const postCrop = async (req, res) => {
  try {
    const { height, width, top, left, imageWidth } = parseObjNumbers(req.body);
    const { photo } = req.files;

    const [imgPath, relativeImgPath] = getImgPath(photo.path);
    const actualDimensions = sizeOf(photo.path);
    const multiplier = actualDimensions.width / imageWidth;
    const params = {
      height: multiplyInt(height, multiplier),
      width: multiplyInt(width, multiplier),
      top: multiplyInt(top, multiplier),
      left: multiplyInt(left, multiplier),
    };

    logger.info(
      "Starting image cropping." +
        `\n - height: ${params.height}` +
        `\n - width: ${params.width}` +
        `\n - top: ${params.top}` +
        `\n - left: ${params.left}` +
        `\n - initialWidth: ${actualDimensions.width}` +
        `\n - initialHeight: ${actualDimensions.height}` +
        `\n - to: ${imgPath}` +
        `\n - from: ${photo.path}`
    );

    await sharp(photo.path).extract(params).toFile(imgPath);

    res.status(200).json({ path: relativeImgPath });
  } catch (err) {
    logger.error(`CROP: An error occured: ${err.message}`);
    console.log(err);
    res.status(500).send();
  }
};

export default createMiddleware([authMiddleware, fileMiddleware, postCrop]);
