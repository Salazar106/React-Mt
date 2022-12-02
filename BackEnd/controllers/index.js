const register = require("./register");
const login = require("./login");
const getUserById = require("./getuserById");
const envios = require("./envios");
const obtenerEnvios = require("./obtenerEnvios");
const obtenerEnvById=require('./obtenerEnvios');
const updateEnvio=require('./update');
const deleteEnvio=require('./deleteEnv')

module.exports = {
  register,
  login,
  getUserById,
  envios,
  obtenerEnvios,
  obtenerEnvById,
  updateEnvio,
  deleteEnvio
  
};
