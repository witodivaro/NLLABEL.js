import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { JWT_TOKEN_SECRET_KEY } from "../config/config";

const ACCESS_TOKEN_EXPIRATION_TIME = 60 * 60;

export const authenticate = async (req, options) => {
  const { csrf = true } = options;

  let isAllowed = true;

  const { accessToken } = req.cookies;

  if (!validateJwtToken(accessToken)) isAllowed = false;

  if (csrf) {
    const csrfToken = req.headers["x-csrf-token"];
    console.log(accessToken, csrfToken);
    if (!(await verifyCsrfToken(csrfToken, accessToken))) isAllowed = false;
  }

  return isAllowed;
};

export const validateJwtToken = (token) => {
  if (!token) return false;

  return jwt.verify(token, JWT_TOKEN_SECRET_KEY);
};

export const verifyCsrfToken = async (csrf, token) => {
  if (!csrf || !token) return false;

  return await bcrypt.compare(token, csrf);
};

export const createJwtToken = () => {
  return jwt.sign(
    {
      iat: Date.now(),
    },
    JWT_TOKEN_SECRET_KEY,
    {
      expiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
    }
  );
};

export const createCSRFToken = async (accessToken) => {
  const csrfToken = await bcrypt.hash(accessToken, 10);

  return csrfToken;
};
