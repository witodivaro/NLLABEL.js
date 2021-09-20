// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import database from "../../database/database";
import createApiHandler from "../../utils/createApiHandler";

export default function handler(req, res) {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      return getSlogansHandler(req, res);
    case "PUT":
      return putSloganHandler(req, res);
    case "DELETE":
      return deleteSloganHandler(req, res);
    case "POST":
      return postSloganHandler(req, res);
    default:
      res.status(404).send();
  }
}

const postSloganHandler = async (req, res) => {
try {
  const { text } = req.body;

  const slogan = await database.insertOne("slogans", { text });

  res.status(200).json({ slogan })
} catch (err) {
  console.error(err);
  res.status(500).json(err);
}
}

const deleteSloganHandler = async (req, res) => {
  try {
    const { _id } = req.body;

    const slogan = await database.deleteOne("slogans", _id);

    res.status(200).json({ slogan });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

const putSloganHandler = async (req, res) => {
  try {
    const { _id, text } = req.body;

    const slogan = await database.updateOne("slogans", _id, { _id, text });
    res.status(200).json({ slogan });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

export const getSlogansHandler = async (req, res) => {
  try {
    const slogans = await database.get("slogans", "array");

    res.json({ slogans });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getSlogans = createApiHandler("slogans", "GET");
