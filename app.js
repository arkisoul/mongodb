const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const personsRouter = require("./routes/persons");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// database connection
const mongoUri =
  "mongodb+srv://learning:learning123@learning.zejua.mongodb.net/mongodb?retryWrites=true&w=majority";
mongoose.connect(mongoUri, (err) => {
  if(err) {
    console.error(`Mongoose connection error!`, err)
    return false;
  }
  console.log(`Successfully connected to the mongodb server`);
})
// const client = new MongoClient(mongoUri);
// app.use((req, res, next) => {
//   client.connect().then((mongoClient) => {
//     const db = mongoClient.db("mongodb");
//     res.locals.db = db;
//     next();
//   })
// })

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/persons", personsRouter);
app.get("/patients", async (req, res, next) => {
  try {
    const patients = await res.locals.db.collection("patients").find({}).toArray();

    // db.collection("patients").insertOne()
    // db.collection("patients").insertMany()
    // db.collection("patients").find()
    // db.collection("patients").findOne()
    // db.collection("patients").updateOne()
    // db.collection("patients").updateMany()
    // db.collection("patients").deleteOne()
    // db.collection("patients").deleteMany()

    return res.json(patients)
  } catch (error) {
    console.error('Error', error);
    res.send("Not okay");
  } finally {
    client.close();
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
