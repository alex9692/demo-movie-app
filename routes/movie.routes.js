const router = require("express").Router();

const movieCtrller = require("../controller/movie");

router.route("/").get(movieCtrller.getMovies).post(movieCtrller.createMovie);

module.exports = router;
