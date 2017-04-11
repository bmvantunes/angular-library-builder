[![Build Status](https://travis-ci.org/bmvantunes/angular-library-builder.svg?branch=master)](https://travis-ci.org/bmvantunes/angular-library-builder)
[![dependencies Status](https://david-dm.org/bmvantunes/angular-library-builder/status.svg)](https://david-dm.org/bmvantunes/angular-library-builder)
[![devDependencies Status](https://david-dm.org/bmvantunes/angular-library-builder/dev-status.svg)](https://david-dm.org/bmvantunes/angular-library-builder?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](https://badge.fury.io/js/angular-library-builder.svg)](https://badge.fury.io/js/angular-library-builder)
[![codecov](https://codecov.io/gh/bmvantunes/angular-library-builder/branch/master/graph/badge.svg)](https://codecov.io/gh/bmvantunes/angular-library-builder)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/bmvantunes/angular-library-builder.svg)](https://greenkeeper.io/)

# What is Angular Library Builder (nglb)?

It's a CLI Tool to build Angular (2+) libraries ready to be published to [npm](https://www.npmjs.com/).

### What problem is Angular Library Builder (nglb) trying to solve?

At the moment there is no official documentation/guidelines on how to build and publish Angular (2+) components/libraries/services/modules to npm. Angular Library Builder (nglb) is trying to solve this in the easiest way possible.

### How does Angular Library Builder (nglb) solve this?

1. If it is a component, inlines html template file into the component as a string, replacing `templateUrl` with `template`
    - In the inlining process nglb also minifies html using [html-minifier](https://www.npmjs.com/package/html-minifier)
2. If it is a component, inlines scss/sass/css file(s) into the component as a string, replacing `stylesUrls` with `styles`. It uses:
    - [node-sass](https://www.npmjs.com/package/node-sass) to compile scss/sass file(s) 
    - [autoprefixer](https://www.npmjs.com/package/autoprefixer) to improve browser compatibilty
    - [csso](https://www.npmjs.com/package/csso) to minimize/optimize your css
3. Finally, it compiles your resulting typescript files with all your html and css inlined, using @angular/compiler-cli (ngc), creating `*.d.ts`, `*.js`, `*.js.map`, `*.metadata.json` files

# Getting Started

#### Install the `angular-library-builder` command

```sh
npm install --save-dev angular-library-builder
```

#### How to use `angular-library-builder`?

Add angular-library-builder (nglb) script, main and types to `package.json`:

```json
"main": "./lib-dist/your-main-file.js",
"types": "./lib-dist/your-main-file.d.ts",
"scripts": {
  "build:library": "nglb --rootDir src/lib --outDir lib-dist"
}
```
or
```json
"main": "./lib-dist/your-main-file.js",
"types": "./lib-dist/your-main-file.d.ts",
"scripts": {
  "build:library": "angular-library-builder --rootDir src/lib --outDir lib-dist"
}
```

Now, in your project root:
```sh
npm run build:library
```

Congratulations! Your library is available in lib-dist folder ready to be published to npm.

To publish your new library to npm, execute the following command in your project root: 
```sh
npm publish
```

#### Options that `angular-library-builder` supports
option (argument) | description
------------ | -------------
--rootDir | Specifies the root directory of input files. Example: ```nglb --rootDir src```, [required]
--outDir | Redirect output structure to the directory. Example: ```nglb --outDir dist```, [required]
--tsconfig | Possibility to extend/override properties in default [tsconfig-ngc.json](https://github.com/bmvantunes/angular-library-builder/blob/master/tsconfig-ngc.json). Example: ```nglb --tsconfig path/to/your/override-tsconfig-ngc.json```
--help (-h) | Print help message


# How to change `angular-library-builder` [tsconfig-ngc.json](https://github.com/bmvantunes/angular-library-builder/blob/master/tsconfig-ngc.json) default properties?
Sometimes the defaults aren't good enough for everybody.

#### Example
Let's imagine that you want to change slightly the build process:
1. change the default "target" from "es5" to "es2015"
2. add a new property, for example, "noImplicitAny": true,

To acomplish this create a file called, for example, ```override-tsconfig-ngc.json``` in your project root.
Your ```override-tsconfig-ngc.json``` file can be something like:
```json
{
  "compilerOptions": {
    "target": "es2015",
    "noImplicitAny": true
  }
}
```

Then, you invoke nglb like this:
```bash
nglb --rootDir path/to/your/source --outDir path/to/dist --tsconfig override-tsconfig-ngc.json
```

# Authors and Contributors

@bmvantunes (Bruno Antunes, author)

Special thanks to [gulp-inline-ng2-template](https://github.com/ludohenin/gulp-inline-ng2-template). Without [gulp-inline-ng2-template](https://github.com/ludohenin/gulp-inline-ng2-template) `angular-library-builder` would not be possible!

# License

The repository code is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
