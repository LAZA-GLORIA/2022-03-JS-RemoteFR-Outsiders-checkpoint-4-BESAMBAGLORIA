require("dotenv").config();

const app = require("./src/app");

const PORT = parseInt(process.env.APP_PORT ?? "5000", 10);
app.listen(PORT, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${PORT}`);
  }
});
