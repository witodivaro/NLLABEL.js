import postCropHandler from "../../api/crop/post";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return postCropHandler(req, res);
    default:
      res.status(404).send();
  }
}
