// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import database from "../../database/database";

import createApiHandler from "../../utils/createApiHandler";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getTeamHandler(req, res);
    default:
      res.status(404).send();
  }
}

export const getTeamHandler = async (req, res) => {
  try {
    const team = await database.get("team", "array");

    res.json({ team });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getTeam = createApiHandler("team", "GET");
