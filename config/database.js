const mongoose = require('mongoose');
const Url="mongodb://localhost:27017/AroundEgypt1"
const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log(`Database Connected: ${conn
        .connection.host}`);
    })
    .catch((err) => {
      console.error(`Database Error: ${err}`);
      process.exit(1);
    });
};
module.exports = dbConnection;