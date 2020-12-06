const createError = require('http-errors');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const userRoutes = require("./api/user/user.routes");
const emailRoutes = require("./api/email/email.routes");
const transactions = require('./api/transactions/transactions.routes');
const donordonationRoutes = require('./api/donorSideDonation/donorDonation.routes');
const donationAdminRoutes = require('./api/adminDonation/donation.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:3030",
      "http://localhost:3030",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
    ],
    credentials: true
  };
  app.use(cors(corsOptions))
}

// routes
app.use("/api/user", userRoutes);
app.use("/api/email", emailRoutes);
app.use('/api/transactions', transactions);
app.use('/api/donordonation', donordonationRoutes);
app.use('/api/donation', donationAdminRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error logger
const logger = require("./services/logger.service");
const port = process.env.PORT || 3030;
app.listen(port, () => {
  logger.info("Server is running on port: " + port);
});

module.exports = app;
