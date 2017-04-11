import * as gulp from 'gulp';
import { DeleteDestFolderTask } from './delete-dest-folder.task';
import { InlineHtmlCssTask } from './inline-html-css.task';
import { NgcCompileTask } from './ngc-compile.task';
import { CopyTsconfigNgcTask } from './copy-tsconfig-ngc.task';
import { CopyPackageMarkdownFilesTask} from './copy-package-markdown-files.task';

/**
 * Main taks that manages all dependencies between other tasks
 */
export class MainTask {
  private deleteTask: DeleteDestFolderTask;
  private inlineTask: InlineHtmlCssTask;
  private copyTsconfigTask: CopyTsconfigNgcTask;
  private ngcTask: NgcCompileTask;
  private copyPackageMd: CopyPackageMarkdownFilesTask;

  constructor() {
    this.deleteTask = new DeleteDestFolderTask();
    this.inlineTask = new InlineHtmlCssTask();
    this.copyTsconfigTask = new CopyTsconfigNgcTask();
    this.ngcTask = new NgcCompileTask();
    this.copyPackageMd = new CopyPackageMarkdownFilesTask();
  }

  registerAllTasks(argv: any, onError: Function) {
    const deleteTaskName = this.deleteTask.registerTask(argv, onError);
    const inlineTaskName = this.inlineTask.registerTask(argv, onError, [deleteTaskName]);
    const copyTsconfigTaskName = this.copyTsconfigTask.registerTask(argv, onError, [inlineTaskName]);
    const ngcTaskName = this.ngcTask.registerTask(argv, onError, [copyTsconfigTaskName]);
    const copyPackageMdTaskName = this.copyPackageMd.registerTask(argv, onError, [ngcTaskName]);

    const taskName = 'main-task';

    gulp.task(taskName, [copyPackageMdTaskName]);

    return taskName;
  }
}
