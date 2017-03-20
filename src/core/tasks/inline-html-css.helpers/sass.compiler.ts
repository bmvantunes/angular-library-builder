import { render, Result } from 'node-sass';
import { Logger } from '../../services/logger';

/**
 * We use node-sass to compile our scss/sass
 * If we get an error we call our callback with the error
 * If we don't have any errors, we just call onSucess with
 *   the resulting css and the initial callback
 */
export function compileSass(path: string, ext: any, file: string, callback: Function, onSuccess: Function) {
  render({
    file: path,
    outputStyle: 'compressed',
    importer: importer
  }, (error: any, result: Result) => {

    if (error) { // Ups problems...
      Logger.error(error.formatted);
      callback(error);
    }
    else { // everything went well :)
      onSuccess(result.css, callback);
    }

  });
}

/**
 * When the compiler tries to import something like @import "~something/something"
 * it will actually get the file /your/project/path/node_modules/something/something.scss
 * This only happens if we type ~ in the beginning of the import path.
 * Otherwise it would work as normally node-sass works:
 *   node-sass will try to use something like ./something/something.scss
 */
function importer(url: string, prev: any, done: Function) {
  const newPath = url.replace(/^~/, `${process.cwd()}/node_modules/`);
  done({ file: newPath });
}
