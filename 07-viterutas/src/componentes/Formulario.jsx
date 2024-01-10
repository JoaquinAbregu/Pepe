import { Link } from "react-router-dom";
import { useState } from "react";

const Formulario = () => {
    
    const [nombre, setNombres] = useState('');
    const [apellido, setApellido] = useState('');
    const [provincia, setProvincia] = useState('');

    /* Este arrow fuction me imprime los nombres que el usuario carga */
    const imprimirDatos = () => {
        console.log(nombre);
        console.log(apellido);
        console.log(provincia);
        /* Para que me vacie los inputs hago lo siguiente */
        setNombres('');
        setApellido('');
        setProvincia('');
    }

    const limpiarDatos = () => {
        setNombres('');
        setApellido('');
        setProvincia('');
    }

    return (
        <>
            <h1 className="text-center mt-5 mb-05">
                Formulario de login
            </h1>
            <div className="container">
                <form id="formLogin">
                    <div className="mb-3 texr-center">
                        <label className="form-label">Nombre</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        /* id="nombre" */ 
                        /* placeholder="name@example.com"  */
                        value = { nombre }
                        /* El onChange lo que es cuando hay un evento en el input, que tenga valor nombre, me toma todo lo que pasa en ese evento y se la pasa a una funcion, que es setNombre y setNombre setea a una variable que es nombre  */
                        onChange= {(e) => setNombres(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="mb-3 texr-center">
                        <label className="form-label">Apellido</label>
                        <input 
                        type="email" 
                        className="form-control"  
                        /* placeholder="name@example.com" */ 
                        value = { apellido }
                        /* El onChange lo que es cuando hay un evento en el input, que tenga valor nombre, me toma todo lo que pasa en ese evento y se la pasa a una funcion, que es setNombre y setNombre setea a una variable que es nombre  */
                        onChange= {(e) => setApellido(e.target.value)}
                        required 
                        />
                    </div>                    
                    <div className="mb-3 texr-center">
                        <label className="form-label">Provincia</label>
                        <input 
                        type="email" 
                        className="form-control"  
                        /* placeholder="name@example.com"  */
                        value = { provincia }
                        /* El onChange lo que es cuando hay un evento en el input, que tenga valor nombre, me toma todo lo que pasa en ese evento y se la pasa a una funcion, que es setNombre y setNombre setea a una variable que es nombre  */
                        onChange= {(e) => setProvincia(e.target.value)}
                        required 
                        />
                    </div>

                    <div className="mb-3 text-center">
                        <button onClick= { imprimirDatos } type="button" className="btn btn-success w-50">Login</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ limpiarDatos } className="btn btn-danger w-75">Reset</button>
                    </div>
                </form>
            </div>


            <Link to= '/'>
                <h2 className="text-center mb-5 mt-5">
                    Pagina principal
                </h2>
            </Link>
        </>
    )
}


export default Formulario;