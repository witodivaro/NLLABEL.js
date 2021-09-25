import database from "../../database/database";
import authMiddleware from "../../middleware/auth.middleware";
import { createMiddleware } from "../../middleware/createMiddleware";
import fileMiddleware from "../../middleware/file.middleware";

const deleteTeamMember = async (req, res) => {
  try {
    const { _id } = req.body;

    const member = await database.deleteOne("team", _id);

    res.status(200).json({ member });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export default createMiddleware([
  authMiddleware,
  fileMiddleware,
  deleteTeamMember,
]);
