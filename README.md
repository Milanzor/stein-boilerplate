[![travis-build][travis-build]][travis-build-url]
[![david-dm-status][david-dm-status]][david-dm-status-url]



# Stein.js Boilerplate

Boilerplate app mostly for personal use, feel free to check it out, but it's probably not your cup-o-tea

After cloning this repo:

- Delete .git, .gitignore, README.md
- Run `yarn install` to install dependencies

The following commands are available  directory:

- `yarn clean` => Removes the public dir
- `yarn build:dev` => Build project in development mode
- `yarn build:prod` => Build project in production mode
- `yarn dev` => webpack-dev-server --env.env=dev
- `yarn watch:dev` =>  Watch project and build in development mode
- `yarn watch:prod` => Watch project and build in production mode
- `yarn test` => Runs all `*.test.js` files with Mocha
- `yarn test:watch` => Watches all *.test.js and retests on change
- `yarn serve` => Serve's content from ./public


Make sure you change the paths in webpack.config.js, currently, the output goes to public/

# How to use

- Make modules that extend AppModule
- Dispatch them in an entry file
- Write tests with `mocha`


[travis-build]: https://api.travis-ci.org/Milanzor/stein-boilerplate.svg?branch=master
[travis-build-url]: https://travis-ci.org/Milanzor/stein-boilerplate

[david-dm-status]: https://david-dm.org/milanzor/stein-boilerplate.svg
[david-dm-status-url]: https://david-dm.org/milanzor/stein-boilerplate
