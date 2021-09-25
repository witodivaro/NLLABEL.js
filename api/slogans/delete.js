import database from "../../database/database";
import authMiddleware from "../../middleware/auth.middleware";
import { createMiddleware } from "../../middleware/createMiddleware";

const deleteSlogan = async (req, res) => {
  try {
    const { _id } = req.body;

    const slogan = await database.deleteOne("slogans", _id);

    res.status(200).json({ slogan });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export default createMiddleware([authMiddleware, deleteSlogan]);
