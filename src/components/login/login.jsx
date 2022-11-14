import React from "react";
import './login.css'

function Login() {
    return (
        <div className="row justify-content-center mttt">
            <div className="col-auto">
                <div class="card card-mine text-center p-5">
                    <form>
                        <i class="bi bi-box2-heart"></i>
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">User</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control mt-3" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <p class="mt-4"><a href="">Registrate Aqui</a></p>
                        <button class="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign in</button>
                        <p class="mt-3 mb-1 text-muted">© InstaYa-2022</p>
                    </form>
                </div>
            </div>
        </div>


    );
}

function Register() {
    return (
        <div className="row justify-content-center mttt">
            <div className="col-auto">
                <div class="card card-mine text-center p-5">
                    <form>
                        <i class="bi bi-box2-heart"></i>
                        <h1 class="h3 mb-3 fw-normal">Please Sing Up</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Name</label>
                        </div>

                        <div class="form-floating">
                            <input type="email" class="form-control mt-2" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Username</label>
                        </div>

                        <div class="form-floating">
                            <input type="email" class="form-control mt-2" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">E-mail</label>
                        </div>

                        <div class="form-floating">
                            <input type="password" class="form-control mt-2" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>


                        <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Sign up</button>
                        <p class="mt-2 mb-3 text-muted">© InstaYa-2022</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { Login, Register }