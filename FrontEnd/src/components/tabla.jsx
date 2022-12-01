import React, { Component } from "react";
import styles from "./styles.module.scss";
import axios from "axios";

export default class tabla extends Component {
  //?/-------------------------Listar Objetos-------------------------\\\\\\
  state = {
    envios: [],
    fecha:'',
    largo:'',
    ancho:'',
    alto:'',
    peso:'',
    direccionR:'',
    ciudadR:'',
    nombredestinatario:'',
    cedula:'',
    direccionE:'',
    ciudadE:'',
  };

  async componentDidMount() {
    this.getEnvios()
  }

  async getEnvios() {
    const row = axios.get("http://localhost:4000/obtenerEnvios");
    this.setState({ envios: (await row).data });
  }
  //?/-----------------------------------------------------------------\\\\\\


  //*-----------------------------crear envio----------------------------\\\\
 
  onChangeEnvio = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newEnvio={
    fecha: this.state.fecha,
    largo: this.state.alto,
    ancho: this.state.ancho,
    alto: this.state.alto,
    peso: this.state.peso,
    direccionR: this.state.direccionR,
    ciudadR: this.state.ciudadR,
    nombredestinatario: this.state.nombredestinatario,
    cedula: this.state.cedula,
    direccionE: this.state.direccionE,
    ciudadE: this.state.ciudadE
    }

   const res= await axios.post("http://localhost:4000/envios", newEnvio);
     this.getEnvios()
    

  }
  //*-----------------------------------------------------------------------\\\\


  //!------------------------------Editar Envio-----------------------------\\\\
  //!------------------------------------------------------------------------\\\
  render() {
    return (
      <div className={styles.welcome}>
        <div className={styles.buttons3}>
          <button data-bs-toggle="modal" data-bs-target="#crearEnvio">
            Crear orden
          </button>
        </div>

        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col"># Servico</th>
              <th scope="col">Fecha Entrega</th>
              <th scope="col">Ciudad Entrega</th>
              <th scope="col">Direccion</th>
              <th scope="col">cedula</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {Array.from(this.state.envios).map((env) => {
              return (
                <tr key={env._id}>
                  <td>{env._id}</td>
                  <td>{env.fecha}</td>
                  <td>{env.ciudadE}</td>
                  <td>{env.direccionE}</td>
                  <td>{env.cedula}</td>
                  <th>
                    <div className={styles.buttons2}>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#editarEnvio"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* --------------------------------------Modal de Crear------------------------------------ */}

        <div
          className="modal fade" id="crearEnvio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Crear Orden
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="modal-body p-3">
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className="form-control"
                          id="fecha"
                          placeholder="Fecha"
                          name="fecha"
                          onChange={this.onChangeEnvio}
                          required
                        />
                        <label for="fecha">Fecha</label>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-2">
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          onChange={this.onChangeEnvio}
                          type="number"
                          className="form-control input-mine1"
                          id="largo"
                          placeholder="Largo"
                          name="largo"
                          required
                        />
                        <label for="largo">Largo</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          onChange={this.onChangeEnvio}
                          type="number"
                          class="form-control input-mine1"
                          id="ancho"
                          placeholder="Ancho"
                          name="ancho"
                          required
                        />
                        <label for="ancho">Ancho</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          onChange={this.onChangeEnvio}
                          type="number"
                          className="form-control input-mine1"
                          id="alto"
                          placeholder="Alto"
                          name="alto"
                          required
                        />
                        <label for="alto">Alto</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          onChange={this.onChangeEnvio}
                          type="number"
                          className="form-control input-mine1"
                          id="peso"
                          placeholder="Peso"
                          name="peso"
                          required
                        />
                        <label for="peso">Peso</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      onChange={this.onChangeEnvio}
                      type="text"
                      className="form-control"
                      id="direccionR"
                      placeholder="Direccion Recogida"
                      name="direccionR"
                      required
                    />
                    <label for="direccionR">Direccion donde se recoge</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      onChange={this.onChangeEnvio}
                      type="text"
                      className="form-control"
                      id="ciudadR"
                      placeholder="Direccion Recogida"
                      name="ciudadR"
                      required
                    />
                    <label for="ciudadR">Ciudad donde se recoge</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      onChange={this.onChangeEnvio}
                      type="text"
                      className="form-control"
                      id="nombredestinatario"
                      placeholder="Nombre del Destinatario"
                      name="nombredestinatario"
                      required
                    />
                    <label for="nombredestinatario">
                      Nombre del Destinatario
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      onChange={this.onChangeEnvio}
                      type="text"
                      className="form-control"
                      id="cedula"
                      placeholder="Ciudad Recogida"
                      name="cedula"
                      required
                    />
                    <label for="cedula">Cedula/Nit del Destinatario</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      onChange={this.onChangeEnvio}
                      type="text"
                      className="form-control"
                      id="ciudadE"
                      placeholder="Direccion Recogida"
                      name="ciudadE"
                      required
                    />
                    <label for="ciudadE">Ciudad de Entrega</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      onChange={this.onChangeEnvio}
                      type="text"
                      className="form-control"
                      id="direccionE"
                      placeholder="Direccion Recogida"
                      name="direccionE"
                      required
                    />
                    <label for="direccionE">Direccion de Entrega</label>
                  </div>
                </div>
                <div  className={styles.buttons3}>
                  <button type="button" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" data-bs-dismiss="modal">Crear orden</button>
                </div>
              </form>
            </div>
          </div>
        </div>


        {/* ----------------------------------Modal de editar----------------------------------------- */}

        <div
          className="modal fade" id="editarEnvio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Editar Orden
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form>
                <div className="modal-body p-3">
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className="form-control"
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
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control input-mine1"
                          id="largo"
                          placeholder="Largo"
                          name="largo"
                        />
                        <label for="largo">Largo</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control input-mine1"
                          id="ancho"
                          placeholder="Ancho"
                          name="ancho"
                        />
                        <label for="ancho">Ancho</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control input-mine1"
                          id="alto"
                          placeholder="Alto"
                          name="alto"
                        />
                        <label for="alto">Alto</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control input-mine1"
                          id="peso"
                          placeholder="Peso"
                          name="peso"
                        />
                        <label for="peso">Peso</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="direccionR"
                      placeholder="Direccion Recogida"
                      name="direccionR"
                    />
                    <label for="direccionR">Direccion donde se recoge</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="ciudadR"
                      placeholder="Direccion Recogida"
                      name="ciudadR"
                    />
                    <label for="ciudadR">Ciudad donde se recoge</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nombredestinatario"
                      placeholder="Nombre del Destinatario"
                      name="nombredestinatario"
                    />
                    <label for="nombredestinatario">
                      Nombre del Destinatario
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="cedula"
                      placeholder="Ciudad Recogida"
                      name="cedula"
                    />
                    <label for="cedula">Cedula/Nit del Destinatario</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="ciudadE"
                      placeholder="Direccion Recogida"
                      name="ciudadE"
                    />
                    <label for="ciudadE">Ciudad de Entrega</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="direccionE"
                      placeholder="Direccion Recogida"
                      name="direccionE"
                    />
                    <label for="direccionE">Direccion de Entrega</label>
                  </div>
                </div>
                <div  className={styles.buttons3}>
                  <button type="button" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit">Crear orden</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

<div></div>;
