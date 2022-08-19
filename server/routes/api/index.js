const router = require('express').Router();
const apiRoutes = require('./api-routes');

router.use('/sumapi', apiRoutes);

module.exports = router;