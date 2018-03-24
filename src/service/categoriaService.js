
var CategoriaModel = require('../models/categoria');

class CategoriaService{

  constructor(){
  //   this.categorias = [{
  //     'id' : 1,
  //     'Categoria': 'Mercado',
  //     'Tipo' : 'Despesa'
  //   },
  //   {
  //     'id' : 2,
  //     'Categoria': 'Transporte',
  //     'Tipo' : 'Despesa'
  //   }];
  // 
  this.categorias = [];
}

  getCategorias(){
    var data = {
      'id' : 2,
      'categoria': 'Mercado',
      'tipo' : 'Despesa'
    };

var a =1;
    //   CategoriaModel.findOne({'id':2}, function(err, categorias){
    //     return cb('teste erro', categorias, 'mais',function(){
    //       a = categorias;
    //     });
        
    //  });

    return CategoriaModel.findOne({'id':2})
    .exec()
    .then((categoria) =>{
      if(categoria){
        return categoria;
      }
      var err = new Error(404);
      return Promise.reject('erros');
      //throw new Error('error');
    })
    
  }

  getCategoriaId(categoriaId){
    var categoria = this.categorias.filter(c => c.id == categoriaId);

    //console.log(this.cagorias[0]);

    return categoria  || null;
  }

}

module.exports = new CategoriaService();