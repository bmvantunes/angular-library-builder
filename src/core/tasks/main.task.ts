import gulp = require('gulp');
import { DeleteDestFolderTask } from './delete-dest-folder.task';
import { InlineHtmlCssTask } from './inline-html-css.task';

/**
 * Main taks that manages all dependencies between other tasks
 */
export class MainTask {
  private deleteTask: DeleteDestFolderTask;
  private inlineTask: InlineHtmlCssTask;

  constructor() {
    this.deleteTask = new DeleteDestFolderTask();
    this.inlineTask = new InlineHtmlCssTask();
  }

  registerAllTasks(argv: any) {
    const deleteTaskName = this.deleteTask.registerTask(argv);
    const inlineTaskName = this.inlineTask.registerTask(argv, [deleteTaskName]);
    const taskName = 'main-task';

    gulp.task(taskName, [inlineTaskName]);

    return taskName;
  }
}
