
import './css/App.css';
import React from "react";
import Navegador from "./componentes/Navegdor.jsx"
import Footer from './componentes/Footer/Footer.jsx';

//Paso 4 de ruteo
//Importamos los gestores de las rutas
import { Routes, Route } from 'react-router-dom';
import  Button  from './componentes/button.js';

//JSK

function App() {

  return (
    
    <React.Fragment>
      <>

      <Navegador />
      
      <h1 className='text-center mt-5 mb-5'> 
        Bienvenido 
      </h1>
      
      {/* Paso 5) */}
      {/* Lo siguiente se le llama rutear al componente */}
      <Routes>
        <Route path='/button' element= {<Button /> } />
      </Routes>

      <Footer />
      </>
    </React.Fragment>
    );

}

export default App;
