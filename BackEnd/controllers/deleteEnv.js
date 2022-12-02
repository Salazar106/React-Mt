const Envios = require("../model/envios");



const deleteEnvio = async (req, res) => {
    const { _id } = req.params;
  
    if (_id.length === 24) {
     await Envios.findByIdAndDelete(_id).then((env) => {
        if (env) {
          return res.json({ mensaje: "orden Eliminada Corectamente" });
        } else {
          res.json({ menssage: "No se encontro la oreder" });
        }
      });
    } else {
      res.json({ mensaje: "id invalido" });
    }
  };


  module.exports = deleteEnvio;