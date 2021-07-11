const Movie = require("../models/movie");
const Actor = require("../models/actor");
const conn = require("mongoose").connection;

exports.createMovie = async (req, res, next) => {
  const session = await conn.startSession();
  try {
    const collections = (await conn.db.listCollections().toArray()).map(
      (collection) => collection.name
    );
    if (!collections.includes("movies")) await conn.createCollection("movies");

    session.startTransaction();
    const movie = await Movie.create([req.body], { session: session });
    const mapPromises = req.body.actor.map(async (el) => {
      await Actor.findByIdAndUpdate(
        el,
        {
          $addToSet: { movie: movie[0]._id },
        },
        { session: session }
      );
    });
    await Promise.all(mapPromises);

    await session.commitTransaction();
    session.endSession();
    conn.close();
    res.status(201).json({ movie });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    conn.close();
    return next(error);
  }
};

exports.getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ movies });
  } catch (error) {
    return next(error);
  }
};
