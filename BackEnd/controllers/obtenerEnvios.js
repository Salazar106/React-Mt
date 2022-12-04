const Envios = require("../model/envios");

const obtenerEnvios = async (req, res) => {
  Envios.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};





module.exports = obtenerEnvios;
