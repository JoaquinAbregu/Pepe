function Datos(params) {
    DNI = '123456789'
    nombre = 'pepe'

    console.log(`Tus datos son: ${DNI} ${nombre} Y han sido guardadas correctamente`);
}

function dameResultado(a, b) {
    resultado = a + b
    console.log(resultado);
}
Datos()

dameResultado(5, 7)
dameResultado(100, 68)

function login(email, facial, password) {
    let respuesta = ' '
    if (email == 'siguemaradona@gmail.com' && facial == true && password == '123456789'){
        respuesta = 'Bienvenido a la app' 
        console.log('Bienvenidos a la app');
        //return respuesta
    }else{
        respuesta = 'No tienes acceso a la app'
        //return respuesta
        console.log('No tienes acceso a la app');
    }
}
//callback
function validacion(token, callback){
    console.log(`El token es: ${token} y es valido para la red`);
    
    email = 'siguemaradona@gmail.com'
    facial = true
    password = '123456789'
    
    callback(email, facial, password);
    
    dameResultado()
}

validacion('1234556Hola', login)

//arrow function
const calculoSaldo = (sueldo1, compra1) => {
    return sueldo1 - compra1
};

console.log(calculoSaldo(10000, 5000));

//fucion  anonima
let calculoSald = function(sueldo, compra) {
    return sueldo - compra;
};
console.log(calculoSald(10, 7));


//DOM
let saludo = document.getElementById('saludos')
console.log(saludo);

saludo.style.background = 'aqua';

let titul = document.getElementById('titulo')
console.log(titul);

function Saludar(nombre) {
    alert(`Hola ${nombre}`)
    titulo.innerHTML = `Hola ${nombre}`
    titulo.style.color = 'green'
    titulo.style.fontFamily = 'Arial'
}

