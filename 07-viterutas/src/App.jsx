
import './App.css'
import Navegador from './componentes/Navegacion'
import {Routes, Route} from 'react-router-dom'
import Home from './componentes/Home'
import Error from './componentes/Error'
import Formuario from './componentes/Formulario'

function App() {

  return (
    <>
    <Navegador /> 
    <Routes>
      <Route path='/home' element= {<Home />}/> 
      <Route path='*' element= {<Error />}/> 
      <Route path='/formulario' element= {<Formuario />}/> 
    </Routes>
    </>
  )
}

export default App
