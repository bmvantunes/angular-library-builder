import * as chalk from 'chalk';

export class Logger {
  static success(text: string) {
    console.log(chalk.green(text));
  }

  static error(text: string) {
    console.log(chalk.red(text));
  }

  static warning(text: string) {
    console.log(chalk.yellow(text));
  }
}
