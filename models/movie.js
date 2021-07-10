const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  description: String,
  actor: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Actor",
    },
  ],
  genre: [{ name: String, description: String }],
});

movieSchema.pre(/^find/, function (next) {
  this.populate({path: 'actor', select: 'name -gender'});
  next();
});

module.exports = mongoose.model("Movie", movieSchema);
