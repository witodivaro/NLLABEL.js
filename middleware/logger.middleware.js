import logger from "../utils/logger";

const logObject = (obj, superfield = "") => {
  Object.keys(obj).forEach((key) => {
    let field = key;

    if (superfield) field = [superfield, key].join(".");

    if (typeof obj[key] === "object") {
      logObject(obj[key], field);
    } else {
      let loggerMessage = `${field}: ${obj[key]}`;
      if (field.search(/password/) > -1) {
        loggerMessage = `${field}: ${obj[key].replace(/./g, "*")}`;
      }
      logger.info(loggerMessage);
    }
  });
};

export const loggerMiddleware = (req, res) => {
  const { method, body, url } = req;

  const setStatus = res.status.bind(res);

  res.status = (status) => {
    logger.info(
      [method.toUpperCase(), url, "Response Status:", status].join(" ")
    );
    return setStatus(status);
  };

  logger.info([method.toUpperCase(), url].join(" "));

  if (!body) return logger.info("No request body.");

  logger.info("--- START REQUEST BODY ---");
  logObject(body);
  logger.info("--- END REQUEST BODY ---");
};
