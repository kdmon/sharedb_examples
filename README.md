Use browserify to bundle node modules for the client side:
http://browserify.org/

> npm install -g browserify
> cd node_modules/ws
> npm install
> cd ../..
> browserify client.js -o static/bundle.js

Run the server `node server` and go to `hostname/index.html`
