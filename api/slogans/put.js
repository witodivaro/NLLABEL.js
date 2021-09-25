import database from "../../database/database";
import authMiddleware from "../../middleware/auth.middleware";
import { createMiddleware } from "../../middleware/createMiddleware";

const putSlogan = async (req, res) => {
  try {
    const { _id, text } = req.body;

    const slogan = await database.updateOne("slogans", _id, { _id, text });
    res.status(200).json({ slogan });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export default createMiddleware([authMiddleware, putSlogan]);
