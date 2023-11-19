import winston from "winston";

test("create new logger with transports level", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "logs/application.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "logs/error.log",
      }),
    ],
  });
  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Info");
});
