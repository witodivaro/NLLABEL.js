// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import database from "../../database/database";
import { createMiddleware } from "../../middleware/createMiddleware";
import { loggerMiddleware } from "../../middleware/logger.middleware";
import createApiHandler from "../../utils/createApiHandler";

async function handler(req, res) {
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

export default createMiddleware([loggerMiddleware, handler]);
