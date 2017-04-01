import { Options } from 'yargs';
import { OptionsKeys } from '../model/options.keys';

export const optionsValues: { [key: string]: Options } = {
  [OptionsKeys.ROOT_DIR] : {
    describe: 'Specifies the root directory of input files',
    demand: true,
    type: 'string'
  },
  [OptionsKeys.OUT_DIR]: {
    describe: 'Redirect output structure to the directory',
    demand: true,
    type: 'string'
  },
  [OptionsKeys.TSCONFIG]: {
    describe: 'Extends/Overrides the default angular-library-builder tsconfig-ngc.json file used by ngc (angular compiler)',
    demand: false,
    type: 'string'
  }
};
