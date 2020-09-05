const mongoose = require('mongoose');

const CepSchema = new mongoose.Schema({
   "cep": String,
   "logradouro": String,
   "complemento": String,
   "bairro": String,
   "localidade": String,
   "uf": String,
});

module.exports = mongoose.model('Cep', CepSchema);
