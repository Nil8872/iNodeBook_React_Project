const mongoose = require("mongoose");
const connectURI =
  "mongodb://127.0.0.1:27017/NoteAppDataBase?directConnection=true&serverSelectionTimeoutMS=2000";
const connectToMongo = () => {
  mongoose
    .connect(connectURI)
    .then(() => {
      console.log("Connection is Successfull");
    })
    .catch((e) => console.log(e));
};
 
module.exports = connectToMongo;

