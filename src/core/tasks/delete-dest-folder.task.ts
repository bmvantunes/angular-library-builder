import * as del from 'del';
import { ITask } from './task.interface';
import { OptionsKeys } from '../../model/options.keys';

const gulp = require('gulp');

/**
 * Delete our dist folder before every run
 */
export class DeleteDestFolderTask implements ITask {

  /**
   * Registring the task
   */
  registerTask(argv: any, onError: () => void, dependencies: string[] = []): string {
    const taskName = 'delete-dest-folder-task';

    gulp.task(taskName, dependencies ,() => {
      return del([argv[OptionsKeys.OUT_DIR]]);
    });

    return taskName;
  }
}
