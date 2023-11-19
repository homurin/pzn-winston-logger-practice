import winston from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
  });
  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Format");
});
