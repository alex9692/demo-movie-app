const router = require("express").Router();

const genderCtrller = require("../controller/gender");

router.post("/", genderCtrller.createGender);

module.exports = router;
