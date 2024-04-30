const express = require("express");
const router = express.Router();
const Booking = require("../Models/bookingModel");

// Create a booking
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking({
      touristName: req.body.touristName,
      touristPhonenum:req.body.tourisPhonenum,
      touristNationalID:req.body.touristNationalID,
      siteName: req.body.siteName,
      date: req.body.date,
    });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(404).send("Booking not found");
  }
});

// Get booking by ID
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete booking by ID
router.delete("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }
    await booking.deleteOne(); // Use deleteOne method to remove the booking
    res.json({ msg: "Booking removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Update booking by ID
router.put("/:id", async (req, res) => {
  try {
    const { touristName, siteName, touristPhonenum,touristNationalID,date } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }

    booking.touristName = touristName;
    booking.touristPhonenum=touristPhonenum;
    booking.touristNationalID=touristNationalID;
    booking.siteName = siteName;
    booking.date = date;

    await booking.save();
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
