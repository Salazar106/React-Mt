import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/login'
import Register from './Components/register'
import Envios from './Components/envios'
import styles from './App.module.scss'

const App=()=>{
  return <BrowserRouter>
  <div className={styles.container}>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/registro' element={<Register/>}/>
      <Route path='/envios:id' element={<Envios/>}/>
    </Routes>
  </div>
  </BrowserRouter>
}

export default App;
