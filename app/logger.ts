import { log } from "./deps.ts";

const defaultLoggerName = "default";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: ({ datetime, levelName, msg }) => {
        return `${datetime.toISOString()} [${levelName}] ${msg}`;
      },
    }),
  },

  loggers: {
    [defaultLoggerName]: {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

export const logger = log.getLogger(defaultLoggerName);
