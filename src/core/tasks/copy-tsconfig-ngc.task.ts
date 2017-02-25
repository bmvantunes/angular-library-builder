import * as gulp from 'gulp';
import { ITask } from './task.interface';
import { OptionsKeys } from '../../model/options.keys';
import * as path from 'path';

/**
 * Copy tsconfig-ngc.json to the outDir folder
 */
export class CopyTsconfigNgcTask implements ITask {

  /**
   * Registring the task
   */
  registerTask(argv: any, dependencies: string[] = []): string {
    const taskName = 'copy-tsconfig-ngc-task';
    const relPathTsconfigNgc = path.relative(process.cwd(), 'tsconfig-ngc.json');

    gulp.task(taskName, dependencies, () => {
      return gulp.src(relPathTsconfigNgc)
        .pipe(gulp.dest(argv[OptionsKeys.OUT_DIR]));
    });

    return taskName;
  }
}
