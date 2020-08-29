const express = require("express");
const morgan = require("morgan");
const PORT = 4000;
const MongoClient = require("mongodb").MongoClient;
const app = express();
app.use(express.json());
app.use(morgan("dev"));

const { MONGO_URI } = process.env;
// DB Setup
// const assert = require('assert');
// const url = process.env.MONGO_URI

// Use connect method to connect to the server
MongoClient.connect(MONGO_URI, { useUnifiedTopology: true }, function (
  err,
  client
) {
  // assert.equal(null, err);
  if (err) {
    console.error(err);
  }
  console.log(client ? "Connected to DB" : "DB connection failed");
  let db;
  if (client) {
    db = client.db("cake");
  }

  app.get("/cake", async (req, res) => {
    res.send("GET cakes");
  });

  app.post("/cake", async (req, res) => {
    console.dir(req.body);
    res.send("POST cake");
  });

  app.post("/register", async (req, res) => {
    res.send("POST create account");
  });

  app.post("/login", async (req, res) => {
    res.send("POST request to the homepage");
  });

  app.post("/logout", async (req, res) => {
    res.send("POST request to the homepage");
  });

  const server = app.listen(PORT, function () {
    console.info("🌍 Listening on port " + server.address().port);
  });
});

/* decide the structure of the website, what information you're gonna store, if there are users
you're gonna need a users db
ingredients, items etc will all have their own tables
what format your data is gonna be in, is food going to be labeled as an item? do they have type?
whatever you're storing is going in your database
mongo new cluster or collection
look up short node mongo react express tutorial
how to set up users, kind of the same as you had in other workshops instead storing data
now in mongo instead of in a file
*/

/*
not a complete api

4 endpoints
register POST create a new user document
login POST fetch user password, compare hash, return token if the hash is good (Bcrypt)
save cake accept form objects and store in mongo
get cake

all accept post request
cd server yarn install
b crypt,
express,
native mongo driver for node or other
json web
cors
store
*/
