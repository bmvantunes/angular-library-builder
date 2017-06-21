import { DeleteDestFolderTask } from './delete-dest-folder.task';
import { InlineHtmlCssTask } from './inline-html-css.task';
import { NgcCompileTask } from './ngc-compile.task';
import { CopyTsconfigNgcTask } from './copy-tsconfig-ngc.task';
import { CopyFilesToOutdirTask } from './copy-files-to-outdir.task';

const gulp = require('gulp');

/**
 * Main taks that manages all dependencies between other tasks
 */
export class MainTask {
  private deleteTask: DeleteDestFolderTask;
  private inlineTask: InlineHtmlCssTask;
  private copyTsconfigTask: CopyTsconfigNgcTask;
  private ngcTask: NgcCompileTask;
  private copyFilesOutdirTask: CopyFilesToOutdirTask;

  constructor() {
    this.deleteTask = new DeleteDestFolderTask();
    this.inlineTask = new InlineHtmlCssTask();
    this.copyTsconfigTask = new CopyTsconfigNgcTask();
    this.ngcTask = new NgcCompileTask();
    this.copyFilesOutdirTask = new CopyFilesToOutdirTask();
  }

  registerAllTasks(argv: any, onError: Function) {
    const deleteTaskName = this.deleteTask.registerTask(argv, onError);
    const inlineTaskName = this.inlineTask.registerTask(argv, onError, [deleteTaskName]);
    const copyTsconfigTaskName = this.copyTsconfigTask.registerTask(argv, onError, [inlineTaskName]);
    const ngcTaskName = this.ngcTask.registerTask(argv, onError, [copyTsconfigTaskName]);
    const copyFilesOutdirTaskName = this.copyFilesOutdirTask.registerTask(argv, onError, [ngcTaskName]);

    const taskName = 'main-task';

    gulp.task(taskName, [copyFilesOutdirTaskName]);

    return taskName;
  }
}
