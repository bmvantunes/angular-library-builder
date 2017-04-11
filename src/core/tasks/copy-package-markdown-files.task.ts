import * as gulp from 'gulp';
import { ITask } from './task.interface';
import { OptionsKeys } from '../../model/options.keys';
import * as plumber from 'gulp-plumber';

/**
 * Copy markdown files and package.json to outDir folder
 */
export class CopyPackageMarkdownFilesTask implements ITask {

  /**
   * Registring the task
   */
  registerTask(argv: any, onError: Function, dependencies: string[] = []): string {
    const taskName = 'copy-package-markdown-files-task';
    const filesToCopy = ['package.json', '*.md'];

    gulp.task(taskName, dependencies, () => {
      return gulp.src(filesToCopy)
        .pipe(plumber(onError))
        .pipe(gulp.dest(argv[OptionsKeys.OUT_DIR]));
    });

    return taskName;
  }
}
