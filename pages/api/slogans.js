// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import postSloganHandler from "../../api/slogans/post";
import putSloganHandler from "../../api/slogans/put";
import deleteSloganHandler from "../../api/slogans/put";
import getSlogansHandler from "../../api/slogans/get";

import createApiHandler from "../../utils/createApiHandler";

export default async function handler(req, res) {
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

export const getSlogans = createApiHandler("slogans", "GET");
