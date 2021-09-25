import database from "../../database/database";

import authMiddleware from "../../middleware/auth.middleware";
import { createMiddleware } from "../../middleware/createMiddleware";
import fileMiddleware from "../../middleware/file.middleware";

import { uploadImgFromFile } from "../utils/utils";

const postTeam = async (req, res) => {
  try {
    const { description, name, position, img } = req.body;

    const payload = {
      description,
      name,
      position,
      img,
    };

    const { photo } = req.files;

    if (photo) payload.img = await uploadImgFromFile(photo);

    const member = await database.insertOne("team", payload);

    res.status(200).json({ member });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export default createMiddleware([authMiddleware, fileMiddleware, postTeam]);
