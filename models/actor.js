const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  movie: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Movie",
    },
  ],
  gender: {
    type: mongoose.Types.ObjectId,
    ref: "Gender",
  },
});

actorSchema.pre(/^find/, function (next) {
  this.populate("gender");
  next();
});

module.exports = mongoose.model("Actor", actorSchema);
