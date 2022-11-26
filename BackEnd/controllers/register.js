const bcrypt = require("bcrypt");
const Usuario = require("../model/users");

const register = async (req, res) => {
  const { nombre, username, correo, password } = req.body;
  Usuario.findOne({ correo }||{username}).then((usuario) => {
    if (usuario) {
      return res.json({
        mensaje: "Su correo o Username ya existen, intentalo denuevo",
      });
    } else if (!nombre || !username || !correo || !password) {
      return res.json({ mensaje: "Falta alguno de los campos por llenar" });
    } else {
      bcrypt.hash(password, 10, (error, passwordHashed) => {
        if (error) res.json({ error });
        else {
          const newUser = new Usuario({
            nombre,
            username,
            correo,
            password: passwordHashed,
          });
          newUser.save().then((usuario) => {
            res.json({ mensaje: "Usuario Creado correctamente", usuario });
          })
          .catch(error=>console.error(error));
        }
      });
    }
  });
};

module.exports = register;
