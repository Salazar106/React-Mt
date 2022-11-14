import React from "react";
import './envios.css'


function Envios() {
    return (



        <div class="card card-table">
            <div class="row justify-content-end">
                <div class="col-auto">

                    <button type="button" class="btn btn-mine mb-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Crear orden
                    </button>

                </div>
            </div>
            <table class="table tb-mine">
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
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>12/01/2022</td>
                        <td>Medellin</td>
                        <td>Calle 34-21sur 22</td>
                        <td>Cumplido</td>
                        <td><button type="button" class="btn btn-mine-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        </td>

                    </tr>

                </tbody>
            </table>


            {/* <-- Modal crear orden--> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header ">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">REGISTRO DE ORDENES</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="date" class="form-control" id="floatingInput" placeholder="Fecha" />
                                        <label for="floatingInput">Fecha</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="time" class="form-control" id="floatingInput" placeholder="Hora" />
                                        <label for="floatingInput">Hora</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-2">
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control input-mine1" id="floatingInput" placeholder="Largo" />
                                        <label for="floatingInput">Largo</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control input-mine1" id="floatingInput" placeholder="Ancho" />
                                        <label for="floatingInput">Ancho</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control input-mine1" id="floatingInput" placeholder="Alto" />
                                        <label for="floatingInput">Alto</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control input-mine1" id="floatingInput" placeholder="Peso" />
                                        <label for="floatingInput">Peso</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Direccion donde se recoge</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Ciudad donde se recoge</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Nombre del Destinatario" />
                                <label for="floatingInput">Nombre del Destinatario</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Ciudad Recogida" />
                                <label for="floatingInput">Cedula/Nit del Destinatario</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Ciudad de Entrega</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Direccion de Entrega</label>
                            </div>


                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-mine">Crear Orden</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal Edit */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">ACTUALIZAR ORDEN</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-3">

                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="date" class="form-control" id="floatingInput" placeholder="Fecha" />
                                        <label for="floatingInput">Fecha</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="time" class="form-control" id="floatingInput" placeholder="Hora" />
                                        <label for="floatingInput">Hora</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-2">
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control input-mine1" id="floatingInput" placeholder="Largo" />
                                        <label for="floatingInput">Largo</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control input-mine1" id="floatingInput" placeholder="Ancho" />
                                        <label for="floatingInput">Ancho</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control input-mine1" id="floatingInput" placeholder="Alto" />
                                        <label for="floatingInput">Alto</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control input-mine1" id="floatingInput" placeholder="Peso" />
                                        <label for="floatingInput">Peso</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Direccion donde se recoge</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput"  placeholder="Direccion Recogida" />
                                <label for="floatingInput">Ciudad donde se recoge</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Nombre del Destinatario" />
                                <label for="floatingInput">Nombre del Destinatario</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Ciudad Recogida" />
                                <label for="floatingInput">Cedula/Nit del Destinatario</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Ciudad de Entrega</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Direccion de Entrega</label>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-mine">Actualizar Orden</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export { Envios };