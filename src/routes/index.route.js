var express = require('express');
var router = express.Router();

//var CategoriaController = require('../controller/categoriaController');

const CategoriaRoute = require('./categoria.route');


router.use('/categoria', CategoriaRoute);


module.exports = router;
