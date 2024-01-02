
//Esto sirve para que cuando el usuario entre a la pagina de Admin le aparezca el email del usuario

//traemos los datos del Admin
let usuario = localStorage.getItem('Admin')

//imprimimos
console.log(usuario);
//Capturo el h2
let nombre = document.getElementById('usuario')

nombre.style.textAlign = 'center';
nombre.style.color = 'red';
nombre.innerHTML = usuario;
/* Puedo cambiaer los tipos de titulos */
/* nombre.innerHTML = `<h1>${nombre.innerHTML}</h1>` */

//funcion para eliminar un item en el LocalStorage
const borrarItemLocalStorage = () => {
    localStorage.removeItem('Admin');
    location.reload();
}

//funcion para eliminar todo del LocalStorage
const borrarTodoLocalStorage = () => {
    localStorage.clear();
    location.reload();
}

console.log('=======================================');
console.log('=======================================');
//Aca ponemos un link que nos lleva a una base de datos de verdad
const URL = 'https://fakestoreapi.com/products'
let contenedorTarjetas = document.getElementById('contenedorTarjetas')
fetch(URL)
    .then(res => res.json())
    .then(json => console.log(json))
console.log('=======================================');
console.log('=======================================');

//Mostramos los productos en unas tarjetas para la vista del cliente
fetch('https://fakestoreapi.com/products')
    //El primer then es un arrow fuction ya que realiza la taraea ed ejecitar un metodo
    .then(response => response.json())
    .then(data => {
        //guardo la data/info que solicitamos dentro de una variable
        const misProductos = data;
        //Variable para el carrito
        let carrito = [];

        //Recorremos los datos atravez de un bucle 
        misProductos.forEach(producto => {
            //creamos la card por cada recorrido que hace el ciclo for
            let card = document.createElement('div')
            //Agregamos la clase a la card con la classList
            card.classList.add('card')
            //Agregamos el ancho a la card con un style.width
            card.style.width = '18rem'

            //Le agregamos una imagen a la card
            let imagen = document.createElement('img')
            //Le agregamos la clase a la imagen
            imagen.classList.add('card-img-top')
            //Le agregamos el src para indicar adonde esta la imagen/fuente (link)
            //El producto.img lo que hace es que por cada producto se busca la imagen que esta en el link de la variable URL
            imagen.src = producto.image
            //Le agregamos el texto alternativo (alt)
            imagen.alt = 'Producto para la compra'

            //Agregamos la imagen a la card
            card.appendChild(imagen)

            //Creamos otro div para el titulo, el parrafo y el ancla
            let divBody = document.createElement('div')
            divBody.classList.add('card-body')

            //Creamos el titulo h5
            let nombreProducto = document.createElement('h5')
            nombreProducto.classList.add('card-title')
            //Agregamos el titulo
            nombreProducto.innerText = producto.title;

            //subir el h5 a su contenedor padre
            cardBody.appendChild(nombreProducto);

            //Creamos la descripcion del producto
            let descripcionProducto = document.createElement('p');
            descripcionProducto.classList.add("card-text");
            descripcionProducto.innerText = producto.description;

            //subir el p a su contenedor padre
            cardBody.appendChild(descripcionProducto);

            //Creamos el boton
            let botonComprar = document.createElement('button')
            botonComprar.classList.add('btn','btn-success')
            botonComprar.innerText = 'Comprar'
            botonComprar.addEventListener('click', producto => {
                //e.preventDefault();

                carrito.push(producto)

                //Imprimo el carrito
                console.log(carrito);

                //Transformo el carrito en texto
                //localStorage.setItems('Carrito', JSON.stringify(carrito));
                
            });
            
            //Agregamos el boton a la card
            cardBody.appendChild(botonComprar);
            
            //agregamos la cardBody a la card
            card.appendChild(cardBody);
            
            //agregar la card al div contenedor
            contenedorTarjetas.appendChild(card);
        });

    })

