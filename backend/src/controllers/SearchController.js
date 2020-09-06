const Cep = require('../models/Cep');

module.exports = {
   async index(request, response) {
      //console.log(request.query);
      const { cep, logradouro, bairro, localidade, uf } = request.query;

      const ceps = await Cep.find({
         cep: {
            $eq: cep
         },
         logradouro: {
            $eq: logradouro
         },
         bairro: {
            $eq: bairro
         },
         localidade: {
            $eq: localidade
         },
         uf: {
            $eq: uf
         },
      });

      return response.json(ceps);
   }
}
