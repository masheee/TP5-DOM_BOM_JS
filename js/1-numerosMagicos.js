//Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
//Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

const boton1 = document.querySelector('.btn-success')
const mensaje = document.getElementById('inicio')
const boton2 = document.querySelector('.btn-danger')
const inputNumero = document.getElementById('numeroInput')

let numeroMagico = 0;

boton1.addEventListener('click', function() {
    numeroMagico = Math.floor(Math.random() * 10) + 1;
    console.log('Numero magico:', numeroMagico)
    mensaje.textContent = '(Juego iniciado)'
    inputNumero.value = ''
    inputNumero.disabled = false
    boton2.disabled = false
});

boton2.addEventListener('click', function(){
    const numero = parseInt(inputNumero.value);

    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert('Error, ingrese un numero valido entre 1 y 10')
        return;
    }

    if (numero === numeroMagico) {
        alert('Adivinaste el numero!')
        inputNumero.disabled = true
        boton2.disabled = true
    } else if (numero < numeroMagico) {
        alert('El numero es mas grande >>>')
    } else {
        alert('El numero es mas chico <<<')
    }

    inputNumero.value = ''
});