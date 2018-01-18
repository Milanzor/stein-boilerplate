![travis-build][travis-build]

# Stein.js Boilerplate

Boilerplate app mostly for personal use, feel free to check it out, but it's probably not your cup-o-tea

After cloning this repo:

- Delete .git, .gitignore, README.md
- Run `yarn install` inside the assets directory

The following commands are available in the assets directory:

- `yarn build`
- `yarn build:production`
- `yarn watch`
- `yarn watch:production`
- `yarn test`
- `yarn test:production`


Make sure you change the paths in webpack.config.js, currently, the output goes to assets/public/assets

# How to use

- Make modules that extend AppModule
- Dispatch them in an entry file
- Write tests with `mocha`


[travis-build]: https://api.travis-ci.org/Milanzor/stein-boilerplate.svg?branch=master