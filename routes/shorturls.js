var express = require('express');
const shortUrlCtrl = require('../controllers/shorturls');
var router = express.Router();

/* GET root index */
router.get('/', shortUrlCtrl.index);
router.post('/', shortUrlCtrl.create);
router.get('/:shorturl/view', shortUrlCtrl.show);
router.get('/:shorturl', shortUrlCtrl.redirect);

module.exports = router;
