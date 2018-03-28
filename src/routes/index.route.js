var express = require('express');
var router = express.Router();

const CategoriaRoute = require('./categoria.route');
const ContaRoute = require('./conta.route');
const TituloRoute = require('./titulo.route');


router.use('/categorias', CategoriaRoute);
router.use('/contas', CategoriaRoute);
router.use('/titulos', TituloRoute);


module.exports = router;
