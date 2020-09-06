const { Router } = require('express');

const CepController = require('./controllers/CepController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/cep', CepController.index);
routes.post('/cep', CepController.store);
routes.delete('/cep/:cep', CepController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;

///instalação do MongoDB Compass Community 1:06:14

/*Métodos HTTP: GET, POST, PUT, DELETE
Tipos de parâmetros:
   Query Params: mets. GET -> request.query (Filtros, Ordenação, Paginação, ...);
   Route Params: mets. PUT, DELETE -> request.params (Identifica um registros para alterar ou deletar); 
   Body: mets. POST, PUT -> request.body (Dados para criação ou alteração de um registro)

routes.delete('/cep/:id', (request, response) => {
   console.log(request.params);

   return response.json({ message: "Deleto um CEP" });
});

*/