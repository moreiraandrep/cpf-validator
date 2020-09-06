const Cep = require('../models/Cep');

module.exports = {
   async index(request, response) {
      console.log(request.query);
      const { cep, logradouro, bairro, localidade, uf } = request.query;

      const ceps = await Cep.find({
         cep: {
            $in: cep
         },
         logradouro,
         bairro,
         localidade,
         uf
      });

      return response.json(ceps);
   }
}
