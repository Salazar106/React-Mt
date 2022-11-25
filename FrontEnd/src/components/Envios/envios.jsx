import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



function Envios() {
    return (



        <div className=" card-table">
            <div className="row justify-content-end">
                <div className="col-auto">

                    <Button type="button"  className="boton1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Crear orden
                    </Button>

                </div>
            </div><br />
            <Table striped bordered hover variant="dark" >
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
                    <tr>
                        <th scope="row">1</th>
                        <td>12/01/2022</td>
                        <td>Medellin</td>
                        <td>Calle 34-21sur 22</td>
                        <td>Cumplido</td>
                        <td><Button type="button" className="boton2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i className="bi bi-pencil-square"></i>
                        </Button>
                        </td>

                    </tr>

                </tbody>
            </Table>


            {/* <-- Modal crear orden--> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">REGISTRO DE ORDENES</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control" id="floatingInput" placeholder="Fecha" />
                                        <label for="floatingInput">Fecha</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-floating mb-3">
                                        <input type="time" className="form-control" id="floatingInput" placeholder="Hora" />
                                        <label for="floatingInput">Hora</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-2">
                                <div className="col-auto">
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control input-mine1" id="floatingInput" placeholder="Largo" />
                                        <label for="floatingInput">Largo</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control input-mine1" id="floatingInput" placeholder="Ancho" />
                                        <label for="floatingInput">Ancho</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div class="form-floating mb-3">
                                        <input type="number" className="form-control input-mine1" id="floatingInput" placeholder="Alto" />
                                        <label for="floatingInput">Alto</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control input-mine1" id="floatingInput" placeholder="Peso" />
                                        <label for="floatingInput">Peso</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Direccion donde se recoge</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Ciudad donde se recoge</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Nombre del Destinatario" />
                                <label for="floatingInput">Nombre del Destinatario</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Ciudad Recogida" />
                                <label for="floatingInput">Cedula/Nit del Destinatario</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Ciudad de Entrega</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Direccion Recogida" />
                                <label for="floatingInput">Direccion de Entrega</label>
                            </div>


                        </div>
                        <div className="modal-footer">

                            <Button type="button" className="boton1">Crear Orden</Button>
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
                            <Button type="button" className="boton3" data-bs-dismiss="modal">Close</Button>
                            <Button type="button" className="boton1">Actualizar Orden</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export { Envios };