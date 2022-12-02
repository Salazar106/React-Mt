const Envios = require("../model/envios");

const obtenerEnvios = async (req, res) => {
  Envios.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const obtenerEnvById = async (req, res) => {
  const envios = await Envios.findById(req.params._id);
  res.send(envios);
};



(module.exports = obtenerEnvios), obtenerEnvById;
