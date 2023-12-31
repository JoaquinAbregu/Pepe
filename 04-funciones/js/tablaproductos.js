
//Creamos una variable para el boton para agregarle los eventos
let boton = document.getElementById('mostrarDatos')

//traer los dato del localstorage
let misProductos = localStorage.getItem('Productos');
//Aca me printea que tenga 84 elementos pero en realidad tengo un solo producto
console.log(misProductos);
console.log('La cantidad de producto es:' + misProductos.length);

//Tengo que a un objeto ya que si los dejo como stringify me va a contar las letras de cada producto y no la cantidad
//Y aca me printea cuanto productos tengo en realidad
misProductos = JSON.parse(misProductos);

console.log(misProductos);
console.log('La cantidad verdadera de producto es:' + misProductos.length);



//Creamos una funcion con un evento
boton.addEventListener = (e) => {
    e.preventDefault();
    
    //Creamos una variable para los datos de las celdas de la tabla
    let tabla = document.getElementById('miTabla')

    for (let i = 0; i < misProductos.length; i++) {
        
        //para crear un objeto hacemos lo suiguiente
        //en este caso creamos una fila para la tabla
        let fila = document.createElement('tr')
        
        //Ahora creamos 4 celdas para cada input
        let celdaNombre = document.createElement('td')
        let celdaPrecio = document.createElement('td')
        let celdaStock = document.createElement('td')
        let celdaDescripcion = document.createElement('td')

        //asignamos los datos a las celdas
        celdaNombre.textContent = misProductos[i].nombre;
        celdaPrecio.textContent = misProductos[i].precio;
        celdaStock.textContent = misProductos[i].stock;
        celdaDescripcion.textContent = misProductos[i].descripcion;

        //agregamos las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaStock);
        fila.appendChild(celdaDescripcion);

        //agregamos la fila a la tabla
        tabla.appendChild(fila);

    }

}