import { ITask } from './task.interface';
import { OptionsKeys } from '../../model/options.keys';
import { main } from '@angular/compiler-cli/src/main';
import { Logger } from '../services/logger';

const gulp = require('gulp');

/**
 * Compile our typescript files with ngc
 */
export class NgcCompileTask implements ITask {

  /**
   * Registring the task
   */
  registerTask(argv: any, onError: Function, dependencies: string[] = []): string {
    const taskName = 'compile-ngc';
    const ngcArguments = { p: `${argv[OptionsKeys.OUT_DIR]}/tsconfig-ngc.json` };

    gulp.task(taskName, dependencies, (done: Function) => {
      main(ngcArguments, Logger.error).then((exitCode: number) => {
        if (exitCode == 0) {
          done();
        }
        else {
          onError();
        }
      });
    });

    return taskName;
  }
}
