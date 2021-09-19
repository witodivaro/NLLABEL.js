// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import database from "../../database/database";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getSlogansHandler(req, res);
    default:
      res.status(404).send();
  }
}

export const getSlogansHandler = async (req, res) => {
  try {
    const slogans = await database.get("slogans", "array");

    res.json({ slogans: slogans.map((slogan) => slogan.text) });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getSlogans = async () => {
  try {
    const { ENV, HOST } = process.env;
    let hostname = HOST;

    if (ENV === "development") {
      hostname = "http://localhost:3000";
    }

    const response = await fetch(`${hostname}/api/slogans`);
    const json = await response.json();

    return { data: json };
  } catch (error) {
    return { error };
  }
};
