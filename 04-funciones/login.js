
console.log('Bienvenido al loging');

const login = () => {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    let form = document.getElementById('formLogin');
    console.log(user);
    console.log(password);

    let usuario = 'pepe@gmail.com'
    let contraseña = '123456'
/*     if (user == ' ' || password == ' '){
        alert('Ingrese los datos solicitados')
        location.href = './formulario.html' //sirve para que si esta vacio el email o la contraseña se quede en el formulario
    }  */
    if (user == usuario && password == contraseña){
        location.href = './admin.html'
    }else{
        location.href = './error.html'
    }

    form.reset();
}

