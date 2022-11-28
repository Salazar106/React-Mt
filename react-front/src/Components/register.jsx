import React from "react";
import { userNavigate } from "react-router-dom";


const Register = () => {
  const navigate = userNavigate();
  return (
    <div>
      <h1>Registro</h1>
      <form>
        <div>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id='nombre' name='nombre' placeholder="Nombre" />
            </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
