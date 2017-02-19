#!/usr/bin/env node

import * as yargs from 'yargs';
import { optionsValues } from './options.values';
import { AngularLibraryBuilder } from '../core/angular-library-builder';

const argv = yargs
  .usage('Usage: $0 [options]')
  .example('Example: $0 --rootDir src/lib --outDir dist',
    '[root directory is src/lib and the output directory is dist]')
  .options(optionsValues)
  .help('help')
  .alias('help', 'h')
  .epilog('Angular (2+) Library Builder')
  .argv;

const builder = new AngularLibraryBuilder();
builder.buildLibrary(argv);
