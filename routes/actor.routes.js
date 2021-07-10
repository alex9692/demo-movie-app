const router = require("express").Router();

const actorCtrller = require("../controller/actor");

router.route('/').get(actorCtrller.getActors).post(actorCtrller.createActor);

module.exports = router;
