const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({ path: 'config.env' });


// Import database connection function
const dbConnection = require('./config/database');
const userRoute = require('./Routes/userRoute');
const authRoute = require("./Routes/authRoute");
const CategoryRoutes = require('./Routes/CategoryRoute');
const subCategoryRoute = require('./Routes/subCategoryRoute');
const BookingRoutes = require("./Routes/bookingRoutes");
const CityRoutes = require('./Routes/SearchRoutes');


// Connect to the database
dbConnection();

const app = express();

// Body parser Middleware
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode:${process.env.NODE_ENV}`);
}

// Use routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/categories', CategoryRoutes);
app.use('/api/v1/subCategory', subCategoryRoute);
app.use("/api/bookings", BookingRoutes);
app.use("/api/city", CityRoutes);


const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
