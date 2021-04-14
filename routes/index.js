var express = require('express');
var router = express.Router();

const User = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(User.nombre);
  User.setNombre('Soy un user');
  console.log(User.nombre);
  res.render('index', { title: 'Express', modelo: User });
});

module.exports = router;
