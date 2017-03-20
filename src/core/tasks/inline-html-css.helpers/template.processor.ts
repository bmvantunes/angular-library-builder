import { minify } from 'html-minifier';
import { Logger } from '../../services/logger';

/**
 * Using html-minifier in order to minify our HTML
 * Some conservative rules used in order to preserve angular functionality
 *
 */
export function templateProcessor(path: string, ext: string, file: string, cb: Function) {
  try {
    var minifiedFile = minify(file, {
      collapseWhitespace: true,
      caseSensitive: true,
      removeComments: true,
      removeRedundantAttributes: true,
      keepClosingSlash: true
    });
    cb(null, minifiedFile);
  }
  catch (err) {
    Logger.error('Problem with html-minifier. Please create an issue https://github.com/bmvantunes/angular-library-builder');
    cb(err);
  }
}
