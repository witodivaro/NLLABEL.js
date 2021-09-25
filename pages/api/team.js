// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getTeamHandler from "../../api/team/get";
import postTeamHandler from "../../api/team/post";
import putTeamHandler from "../../api/team/put";
import deleteTeamHandler from "../../api/team/delete";
import createApiHandler from "../../utils/createApiHandler";

export const config = { api: { bodyParser: false } };

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getTeamHandler(req, res);
    case "POST":
      return postTeamHandler(req, res);
    case "PUT":
      return putTeamHandler(req, res);
    case "DELETE":
      return deleteTeamHandler(req, res);
    default:
      res.status(404).send();
  }
}

export const getTeam = createApiHandler("team", "GET");
