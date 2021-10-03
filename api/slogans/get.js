import database from "../../database/database";
import { createMiddleware } from "../../middleware/createMiddleware";

export const getSlogans = async (req, res) => {
  try {
    const slogans = await database.get("slogans", "array");

    res.status(200).json({ slogans });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export default createMiddleware([getSlogans]);
