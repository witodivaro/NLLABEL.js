import database from "../../database/database";
import authMiddleware from "../../middleware/auth.middleware";
import { createMiddleware } from "../../middleware/createMiddleware";

const postSlogan = async (req, res) => {
  try {
    const { text } = req.body;

    const slogan = await database.insertOne("slogans", { text });

    res.status(200).json({ slogan });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export default createMiddleware([authMiddleware, postSlogan]);
