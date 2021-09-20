import { authenticate } from "../utils/auth";

const authWall = async (req, res) => {
  const isAuthenticated = await authenticate(req, { csrf: true });

  if (!isAuthenticated) {
    res.status(403).send();
  }

  return { passed: isAuthenticated };
};

export default authWall;
