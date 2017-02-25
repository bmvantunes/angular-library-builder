import * as gulp from 'gulp';
import { ITask } from './task.interface';
import { OptionsKeys } from '../../model/options.keys';
import { main } from '@angular/compiler-cli/src/main';

/**
 * Compile our typescript files with ngc
 */
export class NgcCompileTask implements ITask {

  /**
   * Registring the task
   */
  registerTask(argv: any, dependencies: string[] = []): string {
    const taskName = 'compile-ngc';
    const ngcArguments = { p: `${argv[OptionsKeys.OUT_DIR]}/tsconfig-ngc.json` };

    gulp.task(taskName, dependencies, (done: Function) => {
      main(ngcArguments).then((exitCode: number) => {
        console.log('ngc success!!!');
        done();
      });
    });

    return taskName;
  }
}
