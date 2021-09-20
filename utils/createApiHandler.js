const getOptions = {
  method: "GET",
};

const getFetchOptions = (method) => {
  switch (method) {
    case "GET":
      return getOptions;
    default:
      return getOptions;
  }
};

module.exports = createApiHandler = (url, method) => {
  const { PORT } = process.env;
  const hostname = `http://localhost:${PORT}`;

  return async () => {
    try {
      const response = await fetch(
        `${hostname}/api/${url}`,
        getFetchOptions(method)
      );

      const json = await response.json();

      return { data: json };
    } catch (error) {
      return { error };
    }
  };
};
