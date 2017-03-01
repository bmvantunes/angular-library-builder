[![Build Status](https://travis-ci.org/bmvantunes/angular-library-builder.svg?branch=master)](https://travis-ci.org/bmvantunes/angular-library-builder)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

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
