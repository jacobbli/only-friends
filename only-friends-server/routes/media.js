var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({ dest: './media' })

var db = require('../db/index')
var postsHelpers = require('../utils/posts')

router.get('/:filename', async function (req, res, next) {
  res.download(`./media/${req.params.filename}`)
});


router.post('/upload', upload.single('image'), async function (req, res, next) {
  res.json(req.file);
});

module.exports = router;
