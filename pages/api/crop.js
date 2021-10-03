import postCropHandler from "../../api/crop/post";
import { createMiddleware } from "../../middleware/createMiddleware";
import { loggerMiddleware } from "../../middleware/logger.middleware";

export const config = { api: { bodyParser: false } };

async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return postCropHandler(req, res);
    default:
      res.status(404).send();
  }
}

export default createMiddleware([loggerMiddleware, handler]);
