import { getLogger, Logger } from "log4js";

// We need to load the configuration when this file is loaded
// so we can access it when we create loggers.

let logger: Logger;

export class LoggerFactory {
  public static getLogger(): Logger {
    if (!logger) {
      logger = getLogger("server");
      logger.level = "DEBUG";
    }

    return logger;
  }
}
