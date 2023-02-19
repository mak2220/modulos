import * as controller from "./controller.js";

import chalk from "chalk";

const log = console.log

const resultado = controller.multiplica(controller.suma(1,2),controller.suma(4,5));

log(chalk.green(resultado))