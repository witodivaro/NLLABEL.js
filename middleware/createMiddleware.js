export const createMiddleware = (middleware) => async (req, res) => {
  for (let i = 0; i < middleware.length; i++) {
    if (res._headerSent) break;
    await middleware[i](req, res);
  }
};
