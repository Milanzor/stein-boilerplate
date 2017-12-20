# CK Boilerplate

Boilerplate app mostly for personal use, feel free to check it out, but it's probably not your cup-o-tea


After cloning this repo:

- Delete .git, .gitignore, README.md
- Run `yarn install` inside the assets directory

The following commands are available:

`yarn devserver`
`yarn build`
`yarn build:production`
`yarn watch`
`yarn watch:production`


Make sure you change the paths in webpack.config.js, currently, the output goes to assets/test/assets

Running `yarn devserver` will run webpack dev server with the assets/test as base

GL!
