import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  //   handleExceptions: true,
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      filename: "logs/rejection.log",
    }),
  ],
});

function callAync() {
  return Promise.reject("Upps ...");
}

callAync();
