const bcrypt = require("bcrypt");
const Usuario = require("../model/users");

const login = async (req, res) => {
  const { correo, password } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json("Usuario no encontrado");
    }

    bcrypt.compare(password, usuario.password).then((escorrecta) => {
      if (escorrecta) {
        const { id, nombre, username } = usuario;

        res.json({
          mensaje: "Login correcto",
          usuario: {
            id,
            nombre,
            username,
          },
        });
      } else {
        return res.json({ mensaje: "Password incorrect" });
      }
    });
  });
};

module.exports = login