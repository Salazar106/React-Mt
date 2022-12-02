const Envios = require("../model/envios");

const updateEnvio = async (req, res) => {
  const {
    fecha,
    largo,
    ancho,
    alto,
    peso,
    direccionR,
    ciudadR,
    nombredestinatario,
    cedula,
    direccionE,
    ciudadE,
    estado
  } = req.body;
  await Envios.findByIdAndUpdate(req.params.id, {
    fecha,
    largo,
    ancho,
    alto,
    peso,
    direccionR,
    ciudadR,
    nombredestinatario,
    cedula,
    direccionE,
    ciudadE,
    estado
  });
  res.json({ message: "orden actualizada" });

  
};



module.exports = updateEnvio;
