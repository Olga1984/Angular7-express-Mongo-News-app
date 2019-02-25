var express = require('express');
var router = express.Router();

var newsrouter = require('./newsrouter');

router.use('/api', newsrouter);

module.exports = router;