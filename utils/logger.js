import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },

  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.json()
      ),
    }),
  ],
});

export default logger;
