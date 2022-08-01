const path = require('path');
const router = require('express').Router();
const api_route = require(path.join(__dirname,'/api_route'));


// expose api routes to the client
router.use('/api', api_route);

module.exports = router;