import * as gulp from 'gulp';
import { MainTask } from './tasks/main.task';

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
    const taskName = this.mainTask.registerAllTasks(this.args);
    gulp.start(taskName, this.onTasksEnd);
  }

  /**
   * When everything finishes with success this method should be called!
   */
  onTasksEnd() {
    console.log('Your library was successfully built! Congratulations!');
  }
}
