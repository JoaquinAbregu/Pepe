
//1. Obtenemos el tag al que daremos el evento
let enviarDato = document.getElementById('enviarDato')
//Ahora tengo un producto en el indice 0 que tiene los elementos nombre, precio, stock y descripcion 
let misProductos = []
//2.Le asigno una escucha que quiero que realize
enviarDato.addEventListener('click', (e) => {
    e.preventDefault();

    //Variable para resetear los inputs de los datos del cliente en el formuario
    //let miFormulario = document.getElementById('miFormulario')

    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    let stockProducto = document.getElementById('stockProducto').value;
    let descripcionProducto = document.getElementById('descripcionProducto').value;

    //Hago un if para que el ususario complete todos los input y para que no me guarde datos vacios en el objeto
    if (nombreProducto == '' || precioProducto == '' || stockProducto == '' || descripcionProducto == ''){
        alert('Porfavor complete todos los datos');
        return
    }else{

    cargarDatos(nombreProducto, precioProducto, stockProducto, descripcionProducto);
    }
    //Limpiamos los inputs de los datos que carag el cliente 
    borrarDatosforms();
    
})

const cargarDatos = (nombre, precio, stock, descripcion) => {
    //Lo puedo imprimir por separado
    console.log(`Los productos son: ${nombreProducto} ${precioProducto} ${stockProducto} ${descripcionProducto}`);
    //  O con...
    /* Creamos un objeto */
    let producto = {
        nombre: nombre,
        precio: precio,
        stock: stock,
        descripcion: descripcion
    }
    /* Imprimimos el objeto para que me aparesca en el panel de control*/
    console.log(producto);
    /* Estoy guardanto el objeto en la variable misProductos */
    misProductos.push(producto);

    //Seteamos los datos en el localStorage
    localStorage.setItem('Productos', JSON.stringify(misProductos))

    //Ahora imprimo la variable misProductos 
    console.log(misProductos);

    //Este print me suma la cantidad de pedidos que el cliente cargo y lo muestra en la consola
    console.log(`La cantidad de producto es: ${misProductos.length}`);

}


//Puedo hacer una funcion para que me borre directamente los datos de todas los formularios, si es que tengo muchos formularios
const borrarDatosforms = () => {
    let miFormulario = document.getElementById('miFormulario');
    //Limpiamos los inputs de los datos que carag el cliente 
    miFormulario.reset();
} 

