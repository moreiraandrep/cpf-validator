const Cep = require('../models/Cep');

//Patern name: index, show, store, update, destroy

module.exports = {
   async index (request, response) {
      const ceps = await Cep.find();
      
      return response.json(ceps);
   },
   
   async store (request, response) {
      const { cep, logradouro, complemento, bairro, localidade, uf } = request.body

      let ceps = await Cep.findOne({ cep });
      
      if (!ceps) {
         console.log(cep, logradouro, complemento, bairro, localidade, uf);
         
         //const CepArray = techs.split(',').map(tech => tech.trim());
         ceps = await Cep.create({
            cep,
            logradouro,
            complemento,
            bairro,
            localidade,
            uf
         });
      }
      
      return response.json(ceps);
   }
}
