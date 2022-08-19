const router = require('express').Router();
const  { getSummary } = require("../../controllers/summary-controller");

router.route('/').post(getSummary);


module.exports = router;