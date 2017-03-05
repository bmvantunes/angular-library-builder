#!/usr/bin/env node

import * as yargs from 'yargs';
import { optionsValues } from './options.values';
import { AngularLibraryBuilder } from '../core/angular-library-builder';

const argv = yargs
  // help
  .help('help')
  .alias('help', 'h')

  // version
  .version(() => require('../package.json').version)
  .alias('version', 'v')

  // usage
  .usage('Usage: $0 [options]')
  .example('Example: $0 --rootDir src/lib --outDir dist', '[root directory is src/lib and the output directory is dist]')

  // options
  .options(optionsValues)

  // only accept known parameters
  .strict()

  // epilog, aka, footer of the helper command
  .epilog('Angular (2+) Library Builder')
  .argv;

const builder = new AngularLibraryBuilder(argv);
builder.buildLibrary();
