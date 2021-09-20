// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import database from "../../database/database";
import authWall from "../../middleware/auth.middleware";
import createApiHandler from "../../utils/createApiHandler";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getServicesHandler(req, res);
    default:
      res.status(404).send();
  }
}

export const getServicesHandler = async (req, res) => {
  try {
    const services = await database.get("services", "array");

    res.json({ services });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getServices = createApiHandler("services", "GET");
