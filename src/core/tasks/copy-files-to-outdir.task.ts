import { ITask } from './task.interface';
import { OptionsKeys } from '../../model/options.keys';
import * as plumber from 'gulp-plumber';

const gulp = require('gulp');

/**
 * Copy markdown files and package.json to outDir folder
 */
export class CopyFilesToOutdirTask implements ITask {

  /**
   * Registring the task
   */
  registerTask(argv: any, onError: Function, dependencies: string[] = []): string {
    const taskName = 'copy-files-to-outdir-task';
    const filesToCopy = ['package.json', '*.md', '.gitignore', '.npmignore', 'LICENSE'];

    gulp.task(taskName, dependencies, () => {
      return gulp.src(filesToCopy)
        .pipe(plumber(onError))
        .pipe(gulp.dest(argv[OptionsKeys.OUT_DIR]));
    });

    return taskName;
  }
}
