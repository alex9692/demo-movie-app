const Actor = require("../models/actor");

exports.createActor = async (req, res, next) => {
  try {
    const actor = await Actor.create(req.body);
    res.status(201).json({ actor });
  } catch (error) {
    return next(err);
  }
};

exports.getActors = async (req, res, next) => {
  try {
    const actors = await Actor.find();
    res.status(200).json({ actors });
  } catch (error) {
    return next(error);
  }
}