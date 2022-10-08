import {bootstrap, Bootstrapped} from "./deps.ts";
import {Config} from "./config.ts";
import {logger} from "./logger.ts";

@Bootstrapped()
export class App {
  constructor(private readonly config: Config) {
  }

  run() {
    logger.info(`Starting up ${App.name}...`);
    logger.warning(`Unable to connect to database`);
    logger.error(`Cannot launch application server!`);
    logger.debug(`$env: ${this.config.get("CONDA_PROMPT_MODIFIER")}`);
  }
}

const app = bootstrap(App);
app.run();
