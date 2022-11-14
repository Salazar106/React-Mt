import React from "react";
import {NavBar} from './components/NavBar/navbar';
import {Login, Register} from './components/login/login'
import {Envios} from './components/Envios/envios'

// import './App.css';

// const todos = [
//   { text: 'cortar cebolla', completed: false },
//   { text: 'ctomar curso react', completed: false },
//   { text: 'llorar con la llorona', completed: false },


// ];

function App() {
  return (

    <React.Fragment>
      <NavBar/>
      <Envios/>
    </React.Fragment>

  );
}

export default App;
