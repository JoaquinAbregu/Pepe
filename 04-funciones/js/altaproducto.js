
//1. Obtenemos el tag al que daremos el evento
let enviarDato = document.getElementById('enviarDato')
//Ahora tengo un producto en el indice 0 que tiene los elementos nombre, precio, stock y descripcion 
let misroductos = []
//2.Le asigno una esccuha que quiero que realize
enviarDato.addEventListener('click', (e) => {
    e.preventDefault();

    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    let stockProducto = document.getElementById('stockProducto').value;
    let descripcionProducto = document.getElementById('descripcionProducto').value;
    
    //Lo puedo imprimir por separado
    console.log(`Los productos son: ${nombreProducto} ${precioProducto} ${stockProducto} ${descripcionProducto}`);
    //  O con...
    /* Creamos un objeto */
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        stock: stockProducto,
        descripcion: descripcionProducto
    }
    /* Imprimimos el objeto para que me aparesca en el panel de control*/
    console.log(producto);
    /* Estoy guardanto el objeto en la variable misProductos */
    misroductos.push(producto);

    //Ahora imprimo la variable misProductos 
    console.log(misroductos);

    //Este print me suma la cantidad de pedidos que el cliente cargo y lo muestra en la consola
    console.log(`La cantidad de producto es: ${misroductos.length}`);
})