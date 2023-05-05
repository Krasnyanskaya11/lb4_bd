const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/todo", {useNewUrlParser: true});

const db = mongoose.connection;

db.on("error", (err) => {
console.log("[DB > ] ${err}")});
db.once("open", () => {
console.log(`[DB] successfuly connected`)});

module.exports = db;

