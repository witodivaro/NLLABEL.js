// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createMiddleware } from "../../middleware/createMiddleware";
import { loggerMiddleware } from "../../middleware/logger.middleware";
import { createCSRFToken, createJwtToken } from "../../utils/auth";

async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return login(req, res);
    default:
      res.status(404).send();
  }
}

const login = async (req, res) => {
  const { password } = req.body;

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

export default createMiddleware([loggerMiddleware, handler]);
