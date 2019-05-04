import { getLogger, Logger } from "log4js";

// We need to load the configuration when this file is loaded
// so we can access it when we create loggers.

export class LoggerFactory {
  public static getLoggerByName(loggerName: string): Logger {
    const logger: Logger = getLogger(loggerName);
    logger.level = "DEBUG";
    return logger;
  }
}
