const Envios = require("../model/envios");


const obtenerEnvios = async (req, res) =>{
    Envios
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  }


  const obtenerEnvById =async(req,res)=>{
   
        const { id } = req.params;
        Envios.id
          .findById(id)
          .then((data) => res.json(data))
          .catch((error) => res.json({ message: error }));
      
  }

  module.exports = obtenerEnvios, obtenerEnvById;