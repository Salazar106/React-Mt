const Envios = require("../model/envios");

const envios = async (req, res) => {
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
  } = req.body;

  if (
    !fecha ||
    !largo ||
    !ancho ||
    !alto ||
    !peso ||
    !direccionR ||
    !ciudadR ||
    !nombredestinatario ||
    !cedula ||
    !direccionE ||
    !ciudadE
  ) {
    return res.json({ mensaje: "Falta alguno de los campos por llenar" });
  } else {
    const newEnvio = new Envios({
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
    });
    newEnvio
      .save()
      .then((envios) => {
        res.json({ mensaje: "Orden Creada correctamente", envios });
      })
      .catch((error) => console.error(error));
  }
};






module.exports = envios;
