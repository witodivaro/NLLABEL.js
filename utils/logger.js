import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.json(),

  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

export default logger;
