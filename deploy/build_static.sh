#!/bin/sh

npm install
# sed -i '144s/.*/\t\t\tthis.refs.menu.focus()/'  ./node_modules/react-select-box/lib/select-box.js
./node_modules/.bin/webpack --config webpack.config.production.js
