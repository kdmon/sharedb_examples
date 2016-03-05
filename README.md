# Examples for sharedb
## Simple sharedb client

```shell
npm install -g browserify
npm install
browserify client.js -o static/bundle.js
```

Run the server `node server.js` and go to `http://localhost:8080/index.html`

## Simple sharedb client with jsoneditor

```shell
npm install -g browserify
npm install
browserify client_jsoneditor.js -o static/sharedb.js
```

Run the server `node server.js` and go to `http://localhost:8080/jsoneditor.html`