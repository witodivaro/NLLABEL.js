// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import authWall from "../../middleware/auth.middleware";
import { createCSRFToken, createJwtToken } from "../../utils/auth";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return login(req, res);
    default:
      res.status(404).send();
  }
}

const login = async (req, res) => {
  const { password } = req.body;

  console.log(password, process.env.ADMIN_PASSWORD);

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(403).send();
  }

  const accessToken = createJwtToken();
  const csrfToken = await createCSRFToken(accessToken);

  res.setHeader("Set-Cookie", [
    `accessToken=${accessToken}; httpOnly; SameSite=LAX; path=/`,
    `_csrf=${csrfToken}; SameSite=LAX; path=/`,
  ]);
  res.status(200).send();
};
