const {
  registerCreator,
  loginCreator,
} = require("../controllers/creator.controller");

const router = require("express").Router();
router.post("/registerCreator", registerCreator);
router.post("/loginCreator", loginCreator);

module.exports = router;
