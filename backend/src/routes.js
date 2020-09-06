const { Router } = require('express');

const CepController = require('./controllers/CepController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/cep', CepController.index);
routes.post('/cep', CepController.store);
routes.delete('/cep/:cep', CepController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;
