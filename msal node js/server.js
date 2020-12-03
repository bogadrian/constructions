const dotenv = require('dotenv');

// catch non async errors by uncaughtException event
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// tell express the path of config.env
dotenv.config({ path: './config.env' });

// require app from app.js
const app = require('./app');

// set the port, one from onfig.env if there is any or 3000
const port = process.env.PORT || 3000;

// start the server here
const server = app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message, err);
  server.close(() => {
    process.exit(1);
  });
});
