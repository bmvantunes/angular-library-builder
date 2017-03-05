[![Build Status](https://travis-ci.org/bmvantunes/angular-library-builder.svg?branch=master)](https://travis-ci.org/bmvantunes/angular-library-builder)
[![dependencies Status](https://david-dm.org/bmvantunes/angular-library-builder/status.svg)](https://david-dm.org/bmvantunes/angular-library-builder)
[![devDependencies Status](https://david-dm.org/bmvantunes/angular-library-builder/dev-status.svg)](https://david-dm.org/bmvantunes/angular-library-builder?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/angular-library-builder.svg)](https://badge.fury.io/js/angular-library-builder)
[![Greenkeeper badge](https://badges.greenkeeper.io/bmvantunes/angular-library-builder.svg)](https://greenkeeper.io/)

# What is Angular Library Builder?

It's a CLI Tool to build Angular (2+) libraries and publish them to npm

# Getting Started

#### Install the `angular-library-builder` command

```sh
npm install --global angular-library-builder
```

#### How to use `angular-library-builder`?

Run the angular-library-builder (nglb) command in your project directory:

```sh
nglb --rootDir src/lib --outDir dist
```
or
```sh
angular-library-builder --rootDir src/lib --outDir dist
```

Congratulations! Your library is in dist folder ready to be published to npm

#### Options that `angular-library-builder` supports
option (argument) | description
------------ | -------------
--rootDir | Specifies the root directory of input files. Example: ```nglb --rootDir src```, [required]
--outDir | Redirect output structure to the directory. Example: ```nglb --outDir dist```, [required]
--help (-h) | Print help message

#Authors and Contributors

@bmvantunes (Bruno Antunes, author)

Special thanks to [gulp-inline-ng2-template](https://github.com/ludohenin/gulp-inline-ng2-template). Without [gulp-inline-ng2-template](https://github.com/ludohenin/gulp-inline-ng2-template) `angular-library-builder` would not be possible!
