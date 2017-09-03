import { ITask } from './task.interface';
import { OptionsKeys } from '../../model/options.keys';
import * as path from 'path';
import * as plumber from 'gulp-plumber';

const gulp = require('gulp');
const mergeJson = require('gulp-merge-json');

/**
 * Copy tsconfig-ngc.json to the outDir folder
 */
export class CopyTsconfigNgcTask implements ITask {
  /**
   * tsconfig-ngc.json path.
   * Path from this file to tsconfig-ngc.json when project is compiled to javascript
   */
  static tsconfigName = 'tsconfig-ngc.json';
  static tsconfigPath = `../../${CopyTsconfigNgcTask.tsconfigName}`;

  /**
   * Registring the task
   */
  registerTask(argv: any, onError: () => void, dependencies: string[] = []): string {
    const taskName = 'copy-tsconfig-ngc-task';
    const pathDefaultTsconfig = this.getPathToDefaultTsconfig();
    const pathCustomTsconfig = argv[OptionsKeys.TSCONFIG] || pathDefaultTsconfig;

    gulp.task(taskName, dependencies, () => {
      return gulp.src([pathDefaultTsconfig, pathCustomTsconfig])
        .pipe(plumber(onError))
        .pipe(mergeJson({
          fileName: CopyTsconfigNgcTask.tsconfigName,
          concatArrays: false,
          mergeArrays: false
        }))
        .pipe(gulp.dest(argv[OptionsKeys.OUT_DIR]));
    });

    return taskName;
  }

  /**
   * Get path to default tsconfig from current working directory (cwd)
   */
  getPathToDefaultTsconfig() {
    const pathFromDirname = path.resolve(__dirname, CopyTsconfigNgcTask.tsconfigPath);
    const relativePathFromCwd = path.relative(process.cwd(), pathFromDirname);
    return relativePathFromCwd;
  }
}
