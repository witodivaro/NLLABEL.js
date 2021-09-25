import { authenticate } from "../utils/auth";

export const withAuth = (handler) => async (ctx) => {
  // Page request can't contain proper CSRF token.
  const isAuthenticated = await authenticate(ctx.req, { csrf: false });

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return handler(ctx);
};
