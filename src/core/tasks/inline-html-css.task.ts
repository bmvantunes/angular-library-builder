import { OptionsKeys } from '../../model/options.keys';
import { templateProcessor } from './inline-html-css.helpers/template.processor';
import { styleProcessor } from './inline-html-css.helpers/style.processor';
import * as plumber from 'gulp-plumber';

const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');

/**
 * The task that inlines HTML and CSS inside the component
 * It replaces templateUrl with template
 *   and also styleUrls with styles
 */
export class InlineHtmlCssTask {

  /**
   * Registring the task
   */
  registerTask(argv: any, onError: () => void, dependencies: string[] = []): string {
    const taskName = 'inline-html-css-task';
    const inputFolder = `./${argv[OptionsKeys.ROOT_DIR]}`;
    const inputTypescriptFiles = `${inputFolder}/**/*.ts`;
    const rejectTypescriptSpecFiles = `!${inputFolder}/**/*.spec.ts`;
    const destFolder = `./${argv[OptionsKeys.OUT_DIR]}`;

    gulp.task(taskName, dependencies, () => {
      return gulp.src([inputTypescriptFiles, rejectTypescriptSpecFiles])
        .pipe(plumber(onError))
        .pipe(inlineNg2Template(this.getInlineNg2ConfigObject(inputFolder)))
        .pipe(gulp.dest(destFolder));
    });

    return taskName;
  }

  /**
   * Some default config settings for gulp-inline-ng2-template
   */
  private getInlineNg2ConfigObject(inputFolder: string) {
    return {
      base: inputFolder,
      useRelativePaths: true,
      removeLineBreaks: true,
      supportNonExistentFiles: true,
      templateProcessor: templateProcessor,
      styleProcessor: styleProcessor,
    };
  }
}
