process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 🎆 Sutting down...");
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

const app = require("./app");

const port = 8080;
const server = app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
  console.log("ROUTE: http://localhost:8080/api/v1/getData");
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 🎆 Sutting down...");
  console.log(err.name, err.message, err.stack);
  server.close(() => {
    process.exit(1);
  });
});
