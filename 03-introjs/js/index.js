/* Variables */
var nombre = 'Sergio';
let edad = 50;
let apellido = 'Maradona'; /* Cadena de caracteres ==> String */
const DNI = 12345;
let falso = false;
let verdadero = true;

console.log('Mi nombre es' + nombre + 'y mi edad es' + edad);
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`)

console.log('=======================');

//Operadores matematicos
//+ - * **(potencia) / %(modulo, es el resto de la division)

//Operadores relacionales
// == != < > <= >= === (Exactamente igual)

//Operadores Logicos
// ||(O logicos) &&(Y logico) !(negacion/distinto de)

//Ejemplo

let uno = 789
let dos = 231

let resultado = uno + dos
console.log(resultado);

resultado = uno - dos
console.log(resultado);

resultado = uno + dos
console.log(resultado);


resultado = uno * dos
console.log(resultado);


resultado = 3 ** 5
console.log(resultado);


resultado = uno / dos
console.log(resultado);

resultado = uno % dos
console.log(resultado);

//Contador incremental de a uno
uno++;
console.log(uno);

//contador decremental de a uno
uno--;
console.log(uno);

//contador de a dos
uno+2
console.log(uno);
uno-2
console.log(uno);

//Acumulador
let acumulador = 0;
console.log(acumulador);

acumulador += 5
console.log(acumulador);

console.log('=================================');

//Flow de nuestra navegacion

//Espacio de memoria para guardar algun dato del cliente
//nombre = prompt('Ingrese su Nombre porfavor:')
//Imprimimos el dato del cliente a la consola
//console.log(`Hola ${nombre}.Bienvenido a mi pagina web`)
//Y mostramos al cliente en la pantalla
//alert(`Hola ${nombre}, Bienvenido a mi pagina web`)
//Esatas variables se tienen que ejecutar en el navegador ya que en la terminal me va a saltar error
//No printra todo lo anterior ya que le da prioridad a la interaccion con el cliente ya que estas son etiquetas de interaccion
console.log('========================================');

//operadores condicionales
resultado = dos == uno
console.log(resultado);

resultado = dos > uno
console.log(resultado);

resultado = dos != uno
console.log(resultado);

resultado = dos < uno
console.log(resultado);

//Condicional if
let miedad = 17
if(miedad >= 18){
    console.log('El cliente puede comprar bebidas alcoholicas');
}else{
    console.log('El cliente no puede comprar bebidas alcoholicas porque es menor de edad');
}
console.log('=======================================');
let nombre = 'Diego'
let contraseña = '123456789'
if(user == nombre && password == contraseña && facial == true){
    console.log('Bienvenido a la app');
}else{
    console.log('Contraseña y/o contraseña invalida');
}
console.log('=======================================');
let nombre = 'Diego'
let contraseña = '123456789'
if(user == nombre || password == contraseña || facial == false){
    console.log('Bienvenido a la app');
}else{
    console.log('Contraseña y/o contraseña invalida');
}
console.log('=======================================');