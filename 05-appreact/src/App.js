import logo from './logo.svg';
import './css/App.css';
import React from "react";
import Navegador from "./componentes/Navegdor.jsx"
import Footer from './componentes/Footer/Footer.jsx';

//JSK
const saludar = () => {
  alert('Hola')
}
function App() {

  return (
    
    <React.Fragment>
      <>

      <Navegador />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>

          <button onClick={saludar}>
            Saludar al cliente
          </button>
        </header>
      </div>

      <Footer />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
      </>
    </React.Fragment>
    );

}

export default App;
