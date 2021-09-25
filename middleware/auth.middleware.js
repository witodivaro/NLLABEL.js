import { authenticate } from "../utils/auth";

const authMiddleware = async (req, res) => {
  const isAuthenticated = await authenticate(req);

  if (!isAuthenticated) {
    res.status(403).send();
  }
};

export default authMiddleware;
