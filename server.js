var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');

const userRoutes = require("./api/user/user.routes");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:3000",
      "http://localhost:3000"
    ],
    credentials: true
  };
  app.use(cors(corsOptions))
}

// routes
app.use("/api/user", userRoutes);

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
