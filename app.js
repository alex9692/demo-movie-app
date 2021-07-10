const mongoose = require("mongoose");
const express = require("express");

mongoose
  .connect(
    "mongodb://LAPTOP-LV6F0P2B:27017,LAPTOP-LV6F0P2B:27018,LAPTOP-LV6F0P2B:27019/movieDb?replicaSet=rs",
    { useFindAndModify: false }
  )
  .then(() => console.log("db connected"));

const app = express();

const genderRoutes = require("./routes/gender.routes");
const movieRoutes = require("./routes/movie.routes");
const actorRoutes = require("./routes/actor.routes");

app.use(express.json());

app.use("/api/v1/gender", genderRoutes);
app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/actor", actorRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(8000, () => {
  console.log("connected to server");
});
