import winston from "winston";
import TransformStream from "winston-transport";

test("create new logger with new transport", () => {
  class MyTransport extends TransformStream {
    constructor(option) {
      super(option);
    }
    log(info, next) {
      console.log(`${new Date()} : ${info.level} : ${info.message}`);
      next();
    }
  }
  const logger = winston.createLogger({
    level: "info",
    transports: [new MyTransport({})],
  });

  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Info");
  logger.http("Hello HTTP");
  logger.debug("Hello Debug");
  logger.silly("Hello Silly");
});
