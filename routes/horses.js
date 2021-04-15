var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();

/* GET home page. */
router.get('/', horse_controlers.horse_view_all_Page );
router.get('/detail', horse_controlers.horse_view_one_Page);
router.get('/create', horse_controlers.horse_create_Page);
router.get('/update', horse_controlers.horse_update_Page);
router.get('/delete', horse_controlers.horse_delete_Page);
module.exports = router;