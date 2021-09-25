import database from "../../database/database";

const getTeam = async (req, res) => {
  try {
    const team = await database.get("team", "array");

    res.json({ team });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export default getTeam;
