import { Logger } from './logger';

export class InstallationValidator {
  static validateInstallation() {
    const projectVersion = InstallationValidator.getProjectInstalledVersion();
    const runningVersion = InstallationValidator.getRunningVersion();

    if (runningVersion && projectVersion && runningVersion !== projectVersion) {
      InstallationValidator.messageDifferentVersions(projectVersion, runningVersion);
    } else if (!projectVersion) {
      InstallationValidator.messageInstallLocally();
    }
  }

  private static messageInstallLocally() {
    Logger.error(`You should install angular-library-builder locally`);
    Logger.error(`npm install --save-dev angular-library-builder`);
  }

  private static messageDifferentVersions(projectVersion: string, runningVersion: string) {
    Logger.warning(`You don't have the same version Globally and Locally.`);
    Logger.warning(`Global: ${runningVersion}`);
    Logger.warning(`Local: ${projectVersion}`);
    Logger.warning(`Building... \n`);
  }

  private static getProjectInstalledVersion() {
    const packageName = InstallationValidator.getPackageName();

    const projectPackageJson = require('../package.json') || {};
    const dependencies: { [key: string]: string } = { ...projectPackageJson.dependencies, ...projectPackageJson.devDependencies };
    return dependencies && dependencies[packageName];
  }

  private static getRunningVersion() {
    const runningPackageJson = require('../package.json') || {};
    return runningPackageJson.version;
  }

  private static getPackageName() {
    const runningPackageJson = require('../package.json') || {};
    return runningPackageJson.name;
  }
}
