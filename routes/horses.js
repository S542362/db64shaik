var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();

/* GET home page. */
router.get('/', horse_controlers.horse_view_all_Page );

module.exports = router;