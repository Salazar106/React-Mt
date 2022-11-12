import React from "react";

function NavBar() {
    return (
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <p class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark ">
                    <i class="bi bi-box2-heart"></i>
                    <span class="fs-4"> InstaYa</span>
                </p>

                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Inicio</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Envios</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
                </ul>
            </header>
        </div>
    );
}

export { NavBar }