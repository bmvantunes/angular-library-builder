import { render, SassError, Result } from 'node-sass';

/**
 * We use node-sass to compile our scss/sass
 * If we get an error we call our callback with the error
 * If we don't have any errors, we just call onSucess with
 *   the resulting css and the initial callback
 */
export function compileSass(path: string, ext: any, file: string, callback: Function, onSuccess: Function) {
  render({
    data: file || ' ', // we need a better solution for this!
    outputStyle: 'compressed'
  }, (error: SassError, result: Result) => {

    if (error) { // Ups problems...
      callback(error);
    }
    else { // everything went well :)
      onSuccess(result.css, callback);
    }

  });
}
