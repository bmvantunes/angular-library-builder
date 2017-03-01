import * as gulp from 'gulp';
import { ITask } from './task.interface';
import { OptionsKeys } from '../../model/options.keys';
import * as path from 'path';

/**
 * Copy tsconfig-ngc.json to the outDir folder
 */
export class CopyTsconfigNgcTask implements ITask {
  /**
   * tsconfig-ngc.json path.
   * Path from this file to tsconfig-ngc.json when project is compiled to javascript
   */
  static tsconfigPath = '../../tsconfig-ngc.json';

  /**
   * Registring the task
   */
  registerTask(argv: any, dependencies: string[] = []): string {
    const taskName = 'copy-tsconfig-ngc-task';
    const pathFromDirname = path.resolve(__dirname, CopyTsconfigNgcTask.tsconfigPath);
    const relativePathFromCwd = path.relative(process.cwd(), pathFromDirname);

    gulp.task(taskName, dependencies, () => {
      return gulp.src(relativePathFromCwd)
        .pipe(gulp.dest(argv[OptionsKeys.OUT_DIR]));
    });

    return taskName;
  }
}
