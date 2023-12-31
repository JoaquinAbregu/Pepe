
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
nombre.innerHTML = `<h1>${nombre.innerHTML}</h1>`