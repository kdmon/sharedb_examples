//JSON0 OT Type https://github.com/ottypes/json0
var sharedb = require("sharedb/lib/client");
var WebSocket = require("ws/lib/WebSocket");

console.log("hi there!");

var connection = new sharedb.Connection(new WebSocket(), true);
console.log("connection:"+connection);
var doc = connection.get("collection", "document");
console.log("doc:"+doc);
doc.subscribe(function(error){
  console.log("doc.type:"+doc.type);
  if(error){
    console.log("Failed to subscribe.");
  }
  if (!doc.type) {
    doc.create({x: "hello"});
    console.log("doc.create is called");
  }
});

doc.on('op', function(op, source) {
  // Op that changed the document
  console.log(op);
  console.log(doc.data);
});