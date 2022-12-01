
import axios from "axios";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import tabla from "./tabla";

import styles from "./styles.module.scss";

const Welcome = () => {
  // const [name, setName] = useState();

  const navigate = useNavigate();

  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     axios
  //       .get(`http://localhost:4000/user`, {
  //         headers: {
  //           token: token,
  //         },
  //       })
  //       .then(({ data }) => setName(data.nombre))
  //       .catch((error) => console.error(error));
  //   }
  // }, [token]);

  ///---------------------------------------////

  const [inputs, setInputs] = useState({
    fecha: "",
    largo: "",
    ancho: "",
    alto: "",
    peso: "",
    direccionR: "",
    ciudadR: "",
    nombredestinatario: "",
    cedula: "",
    direccionE: "",
    ciudadE: "",
  });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

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
  } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      fecha !== "" &&
      largo !== "" &&
      ancho !== "" &&
      alto !== "" &&
      peso !== "" &&
      direccionR !== "" &&
      ciudadR !== "" &&
      nombredestinatario !== "" &&
      cedula !== "" &&
      direccionE !== "" &&
      direccionE !== ""
    ) {
      const Envios = {
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
      };
      setLoading(true);
      await axios
        .post("http://localhost:4000/envios", Envios)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setInputs({
            fecha: "",
            largo: "",
            ancho: "",
            alto: "",
            peso: "",
            direccionR: "",
            ciudadR: "",
            nombredestinatario: "",
            cedula: "",
            direccionE: "",
            ciudadE: "",
          });
          setTimeout(() => {
            setMensaje("");
            navigate("/welcome");
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Hubo un error");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });

      setLoading(false);
    }
  };
 

  return (
    <div className={styles.welcome}>
      <div>
        <div className={styles.buttons3}>
          <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Crear orden
          </button>
        </div>
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col"># Servico</th>
              <th scope="col">Fecha Entrega</th>
              <th scope="col">Ciudad Entrega</th>
              <th scope="col">Direccion</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
           
          </tbody>
        </table>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Crear Orden
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
              <div class="modal-body p-3">
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <div class="form-floating mb-3">
                      <input
                        onChange={(e) => HandleChange(e)}
                        type="date"
                        class="form-control"
                        id="fecha"
                        placeholder="Fecha"
                        name="fecha"
                      />
                      <label for="fecha">Fecha</label>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-2">
                  <div className="col-auto">
                    <div class="form-floating mb-3">
                      <input
                        onChange={(e) => HandleChange(e)}
                        type="number"
                        class="form-control input-mine1"
                        id="largo"
                        placeholder="Largo"
                        name="largo"
                      />
                      <label for="largo">Largo</label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div class="form-floating mb-3">
                      <input
                        onChange={(e) => HandleChange(e)}
                        type="number"
                        class="form-control input-mine1"
                        id="ancho"
                        placeholder="Ancho"
                        name="ancho"
                      />
                      <label for="ancho">Ancho</label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div class="form-floating mb-3">
                      <input
                        onChange={(e) => HandleChange(e)}
                        type="number"
                        class="form-control input-mine1"
                        id="alto"
                        placeholder="Alto"
                        name="alto"
                      />
                      <label for="alto">Alto</label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div class="form-floating mb-3">
                      <input
                        onChange={(e) => HandleChange(e)}
                        type="number"
                        class="form-control input-mine1"
                        id="peso"
                        placeholder="Peso"
                        name="peso"
                      />
                      <label for="peso">Peso</label>
                    </div>
                  </div>
                </div>

                <div class="form-floating mb-3">
                  <input
                    onChange={(e) => HandleChange(e)}
                    type="text"
                    class="form-control"
                    id="direccionR"
                    placeholder="Direccion Recogida"
                    name="direccionR"
                  />
                  <label for="direccionR">Direccion donde se recoge</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    onChange={(e) => HandleChange(e)}
                    type="text"
                    class="form-control"
                    id="ciudadR"
                    placeholder="Direccion Recogida"
                    name="ciudadR"
                  />
                  <label for="ciudadR">Ciudad donde se recoge</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    onChange={(e) => HandleChange(e)}
                    type="text"
                    class="form-control"
                    id="nombredestinatario"
                    placeholder="Nombre del Destinatario"
                    name="nombredestinatario"
                  />
                  <label for="nombredestinatario">
                    Nombre del Destinatario
                  </label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    onChange={(e) => HandleChange(e)}
                    type="text"
                    class="form-control"
                    id="cedula"
                    placeholder="Ciudad Recogida"
                    name="cedula"
                  />
                  <label for="cedula">Cedula/Nit del Destinatario</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    onChange={(e) => HandleChange(e)}
                    type="text"
                    class="form-control"
                    id="ciudadE"
                    placeholder="Direccion Recogida"
                    name="ciudadE"
                  />
                  <label for="ciudadE">Ciudad de Entrega</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    onChange={(e) => HandleChange(e)}
                    type="text"
                    class="form-control"
                    id="direccionE"
                    placeholder="Direccion Recogida"
                    name="direccionE"
                  />
                  <label for="direccionE">Direccion de Entrega</label>
                </div>
              </div>
              <div class="modal-footer" className={styles.buttons3}>
                <button type="button" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit">
                  {loading ? "Procesando..." : "Crear Orden"}
                </button>
              </div>
            </form>
            {mensaje && <div className={styles.toast}>{mensaje}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
