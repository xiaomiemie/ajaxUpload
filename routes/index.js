var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var mt = multipart();
var fs = require('fs')
  /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/ifrm', function(req, res, next) {
  res.render('ifrm', {
    title: 'Express'
  });
});
router.get('/formdata', function(req, res, next) {
  res.render('formdata', {
    title: 'Express'
  });
});

router.post('/upload2', mt, function(req, res) {
  var fpath = req.files.myfile.path;
  fname = fpath.substr(fpath.lastIndexOf('\\')+1);
  setTimeout(function() {
      res.send('<script>window.parent.finish("'+fname+'")</script>');
    }, 2000)
});
router.post('/upload3', mt, function(req, res) {
  var fpath = req.files.myfile.path;
  fname = fpath.substr(fpath.lastIndexOf('\\')+1);
  setTimeout(function() {
      res.json({fname:fname})
    }, 2000)
})

module.exports = router;