// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import database from "../../database/database";

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

export const getServices = async () => {
  try {
    const { ENV, HOST } = process.env;
    let hostname = HOST;

    if (ENV === "development") {
      hostname = "http://localhost:3000";
    }

    const response = await fetch(`${hostname}/api/services`);
    const json = await response.json();

    return { data: json };
  } catch (error) {
    return { error };
  }
};
