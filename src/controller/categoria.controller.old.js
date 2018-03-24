var CategoriaService = require('../service/categoriaService');
var CategoriaModel = require('../models/categoria');

class CategoriaController{

  constructor(router){
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes(){

    this.router.get('/categoria', this.getCategorias.bind(this));

    /**
     * @api {get} /categoria/:id Request Categoria
     * @apiName GetCategoria
     * @apiGroup Categoria
     *
     * @apiParam {Number} id Categoria unique ID.
     *
     * @apiSuccess {String} Descricao   Descrição da categoria.
     * @apiSuccess {String} Tiposdfdsf  Tipo da categoria.
     */
    this.router.get('/categoria/:id', this.getCategoriaId.bind(this));
  }

  getCategorias(req, res){
    // var temp =  CategoriaService.getCategorias((err, categorias, mais) => {
    //   res.json(err+ mais);
    //   temp = err;
    // });
    // setTimeout(() => {
    //   console.log(temp + "callback"); 
    // }, 5000);

    CategoriaService.getCategorias()
      .then((user) => {
          //req.user = user; // eslint-disable-line no-param-reassign
        res.json(user)
      })
      .catch((err) => {
        res.json(err)
      });
     
 }

  getCategoriaId(req, res){
    var id = req.params.id;

    var categoria = CategoriaService.getCategoriaId(id);

    if(!categoria){
      res.sendStatus(404);
    } else {
      res.json(categoria);
    }
    
  }
}

module.exports = CategoriaController;