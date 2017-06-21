import { MainTask } from './tasks/main.task';
import { Logger } from './services/logger';

const gulp = require('gulp');

/**
 * This is just an abstraction on top of gulp
 */
export class AngularLibraryBuilder {
  private mainTask: MainTask;

  constructor(private args: { [key: string]: string }) {
    this.mainTask = new MainTask();
  }

  /**
   * Invoke mainTask to register all the other tasks in gulp api
   * Then run the main task with gulp.
   */
  buildLibrary() {
    const taskName = this.mainTask.registerAllTasks(this.args, this.onError);
    gulp.start(taskName, this.onSuccess);
  }

  /**
   * When everything finishes with success this method should be called!
   */
  onSuccess() {
    Logger.success('Your library was successfully built! Congratulations!');
    process.exit(0);
  }

  /**
   * When something wrong happens this method should be called!
   */
  onError() {
    Logger.warning('\nUnfortunately we were not able to build your library! :( \n');
    process.exit(-1);
  }
}
