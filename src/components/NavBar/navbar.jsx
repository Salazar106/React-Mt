import React from "react";
import './../Envios/envios.css'

function NavBar() {
    return (
        <div class="container">

            
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <p class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark ">
                    <span class="fs-4"> InstaYa</span>
                </p>

                <ul class="nav nav-pills">
                    <li class="nav-item"><button href="#" class="btn btn-menu" aria-current="page">Inicio</button></li>
                    <li class="nav-item"><button href="#" class="btn btn-menu">Login</button></li>
                </ul>
            </header>
        </div>
    );
}

export { NavBar }