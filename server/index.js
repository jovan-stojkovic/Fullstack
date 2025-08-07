const express = require("express");
const app = express();

const db = require("./models");
const postRouter = require("./routes/Posts");

app.use(express.json());
app.use(require("cors")()); // ako koristiš CORS
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server is running on port 3001");
  });
});

