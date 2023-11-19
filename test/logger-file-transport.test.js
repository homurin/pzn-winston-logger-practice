import winston from "winston";

test("create new logger with console and file transports", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "logs/application.log",
      }),
      new winston.transports.File({
        filename: "logs/johndoe.log",
      }),
    ],
  });
  logger.info("Hello logging");
  logger.info("Hello logging");
  logger.info("Hello logging");
});
