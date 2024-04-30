const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  touristName: {
    type: String,
    //required: true,
  },
  touristPhonenum: {
    type: Number,
   // required: true,
  },
  touristNationalID: {
    type: Number,
   // required: true,
  },
  
  siteName: {
    type: String,
   // required: true,
  },
  date: {
    type: Date,
    //required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
