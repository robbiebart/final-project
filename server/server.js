const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

var app = express();

app.use(express.json());
app.use(morgan("dev"));
// app.use(require('./routes'));
// test push

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});

/* decide the structure of the website, what information you're gonna store, if there are users you're gonna need a 
users db
ingredients, items etc will all have their own tables
what format your data is gonna be in, is food going to be labeled as an item? do they have type?
whatever you're storing is going in your database
mongo new cluster or collection
look up short node mongo react express tutorial
how to set up users, kind of the same as you had in other workshops instead storing data now in mongo instead of in a file 
*/
