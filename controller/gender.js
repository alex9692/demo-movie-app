const Gender = require("../models/gender");

exports.createGender = async (req, res, next) => {
  try {
    const gender = await Gender.create(req.body);
    res.status(201).json({ gender });
  } catch (error) {
    return next(err);
  }
};
