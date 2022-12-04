import React, { Component } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default class tabla extends Component {
  //?/-------------------------Listar Objetos-------------------------\\\\\\


  state = {
    envios: [],
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
    estado: "",
    _id: "",

  };

  async componentDidMount() {

    this.getEnvios();
  }

  async getEnvios() {
    const row = axios.get("http://localhost:4000/obtenerEnvios");
    this.setState({ envios: (await row).data });
  }
  //?/-----------------------------------------------------------------\\\\\\

  //*-----------------------------crear envio----------------------------\\\\

  onChangeEnvio = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };




  onSubmit = async (e) => {
    e.preventDefault();
    const newEnvio = {
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
      ciudadE: this.state.ciudadE,
    };

    await axios.post("http://localhost:4000/envios", newEnvio);
    this.getEnvios();
  };
  //*-----------------------------------------------------------------------\\\\

  EditEnv = async (id) => {

    const res = await axios.get('http://localhost:4000/obtenerEnvById/' + id);
    let row = res.data

    this.setState({
      _id: row._id,
      fecha: row.fecha,
      largo: row.largo,
      ancho: row.ancho,
      alto: row.alto,
      peso: row.peso,
      direccionR: row.direccionR,
      ciudadR: row.ciudadR,
      nombredestinatario: row.nombredestinatario,
      cedula: row.cedula,
      direccionE: row.direccionE,
      estado: row.estado,

    });

    console.log(this.state);
  }

  onSubmitEdit = async (e) => {
    e.preventDefault();
    const editEnvio = {
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
      ciudadE: this.state.ciudadE,
      estado: this.state.estado,
    };

    await axios.put("http://localhost:4000/updateEnvio/" + this.state._id, editEnvio);
    this.getEnvios();
  }




  //!------------------------------eliminar Envio-----------------------------\\\\
  deleteOrder = async (id) => {
    await axios.delete('http://localhost:4000/deleteEnvio/' + id);
    this.getEnvios();
  }
  //!------------------------------------------------------------------------\\\
  render() {
    return (
      <div className={styles.welcome}>
        <div className={styles.buttons3}>
          <button onClick={this.RenewImpust} data-bs-toggle="modal" data-bs-target="#crearEnvio">
            Crear orden
          </button>
        </div>

        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col"># Servico</th>
              <th scope="col">Ciudad Entrega</th>
              <th scope="col">Direccion</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {Array.from(this.state.envios).map((env) => {
              return (
                <tr key={env._id}>
                  <td>{env._id}</td>
                  <td>{env.ciudadE}</td>
                  <td>{env.direccionE}</td>
                  <td>{env.estado}</td>
                  <th>
                    <div className={styles.buttons2}>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#editarEnvio"
                        onClick={() => this.EditEnv(env._id)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>

                      <div className={styles.buttonsWarning}>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#VerOrden"
                          onClick={() => this.EditEnv(env._id)}
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                      </div>
                      <div className={styles.buttonsDanger}>
                        <button onClick={() => this.deleteOrder(env._id)}>
                          <i className="bi bi-trash3"></i>
                        </button>
                      </div>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* --------------------------------------Modal de Crear------------------------------------ */}

        <div
          className="modal fade"
          id="crearEnvio"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
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
                        <label>Fecha</label>
                      </div>
                    </div>
                  </div>
            
                  <div className="row justify-content-center mt-2">
                    <div className="col-3">
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
                        <label >Largo</label>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-floating mb-3">
                        <input
                          onChange={this.onChangeEnvio}
                          type="number"
                          className="form-control input-mine1"
                          id="ancho"
                          placeholder="Ancho"
                          name="ancho"
                          required
                        />
                        <label >Ancho</label>
                      </div>
                    </div>
                    <div className="col-3">
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
                        <label>Alto</label>
                      </div>
                    </div>
                    <div className="col-3">
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
                        <label >Peso</label>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-6">
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
                    <label>Direccion donde se recoge</label>
                  </div>
                    </div>
                    <div className="col-6">
                      
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
                    <label >Ciudad donde se recoge</label>
                  </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-6">
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
                    <label >
                      Nombre del Destinatario
                    </label>
                  </div>
                    </div>
                    <div className="col-6">
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
                    <label >Cedula/Nit del Destinatario</label>
                  </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-6">
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
                    <label >Ciudad de Entrega</label>
                  </div>
                    </div>
                    <div className="col-6">
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
                    <label >Direccion de Entrega</label>
                  </div>
                    </div>
                  </div>                   
                </div>
                <div className={styles.buttons3}>
                  <button type="button" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" data-bs-dismiss="modal">
                    Crear orden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ----------------------------------Modal de editar----------------------------------------- */}

        <div
          className="modal fade"
          id="editarEnvio"

          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
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
              <form onSubmit={this.onSubmitEdit}>
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


                        />
                        <label>Fecha</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="estado"
                          placeholder="estado"
                          name="estado"
                          onChange={this.onChangeEnvio}
                          value={this.state.estado}

                        />
                        <label>Estado</label>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-2">
                    <div className="col-3">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control input-mine1"
                          id="largo"
                          placeholder="Largo"
                          name="largo"
                          onChange={this.onChangeEnvio}
                          value={this.state.largo}

                        />
                        <label>Largo</label>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control input-mine1"
                          id="ancho"
                          placeholder="Ancho"
                          name="ancho"
                          onChange={this.onChangeEnvio}
                          value={this.state.ancho}

                        />
                        <label >Ancho</label>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control input-mine1"
                          id="alto"
                          placeholder="3"
                          name="alto"
                          onChange={this.onChangeEnvio}
                          value={this.state.alto}

                        />
                        <label >Alto</label>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control input-mine1"
                          id="peso"
                          placeholder="Peso"
                          name="peso"
                          onChange={this.onChangeEnvio}
                          value={this.state.peso}

                        />
                        <label>Peso</label>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="direccionR"
                          placeholder="Direccion Recogida"
                          name="direccionR"
                          onChange={this.onChangeEnvio}
                          value={this.state.direccionR}


                        />
                        <label >Direccion donde se recoge</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="ciudadR"
                          placeholder="Direccion Recogida"
                          name="ciudadR"
                          onChange={this.onChangeEnvio}
                          value={this.state.ciudadR}


                        />
                        <label >Ciudad donde se recoge</label>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="nombredestinatario"
                          placeholder="Nombre del Destinatario"
                          name="nombredestinatario"
                          onChange={this.onChangeEnvio}
                          value={this.state.nombredestinatario}


                        />
                        <label >
                          Nombre del Destinatario
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="cedula"
                          placeholder="Ciudad Recogida"
                          name="cedula"
                          onChange={this.onChangeEnvio}
                          value={this.state.cedula}


                        />
                        <label>Cedula/Nit del Destinatario</label>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="ciudadE"
                          placeholder="Direccion Recogida"
                          name="ciudadE"
                          onChange={this.onChangeEnvio}
                          value={this.state.ciudadE}


                        />
                        <label >Ciudad de Entrega</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="direccionE"
                          placeholder="Direccion Recogida"
                          name="direccionE"
                          onChange={this.onChangeEnvio}
                          value={this.state.direccionE}


                        />
                        <label >Direccion de Entrega</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttons3}>
                  <button type="button" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit">Actualizar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ----------------------------------ver orden----------------------------------------- */}

        <div className="modal fade" id="VerOrden" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Orden </h1>
                <h1 className="modal-title fs-5" id="exampleModalLabel">: {this.state._id}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row justify-content-center">
                  <div className="col-6">
                    <p><h5>Fecha:</h5> {this.state.fecha}</p>
                  </div>
                  <div className="col-6">
                    <p><h5>Alto:</h5> {this.state.alto}</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6">
                    <p><h5>Ancho:</h5> {this.state.ancho}</p>
                  </div>
                  <div className="col-6">
                    <p><h5>Largo:</h5> {this.state.largo}</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6">
                    <p><h5>Peso:</h5> {this.state.peso}</p>
                  </div>
                  <div className="col-6">
                    <p><h5>Direccion de Recogida:</h5> {this.state.direccionR}</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6">
                    <p><h5>Ciudad de Recogida:</h5> {this.state.ciudadR}</p>
                  </div>
                  <div className="col-6">
                    <p><h5>Nombre del destinatario:</h5> {this.state.nombredestinatario}</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6">
                    <p><h5>Cedula:</h5> {this.state.cedula}</p>
                  </div>
                  <div className="col-6">
                    <p><h5>Ciudad de entrega:</h5> {this.state.ciudadE}</p>
                  </div>
                </div>
                <p><h5>Direccion de entrega:</h5> {this.state.direccionE}</p>
              </div>
              <div className="modal-footer">
              <div className={styles.buttons3}>
                  <button type="button" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

<div></div>;
