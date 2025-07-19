//Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.

const formuTempo = document.getElementById('form-tempo')
const inputTempo = document.getElementById('form')
const spanCont = document.getElementById('contador')
const btnInicio = document.querySelector('.btn-success')
const btnPausa = document.querySelector('.btn-primary')
const btnReset = document.querySelector('.btn-danger')

btnInicio.disabled = false;
btnPausa.disabled = true;
btnReset.disabled = true;

let tiempoRest = 0;
let idInterval;

function formato(seg){
    const horas = Math.floor(seg / 3600);
    const minutos = Math.floor((seg % 3600) / 60);
    const segundos = seg % 60;

    return `${horas.toString().padStart(2,'0')} : ${minutos.toString().padStart(2,'0')} : ${segundos.toString().padStart(2,'0')}`
}

formuTempo.addEventListener('submit', (event)=>{
    event.preventDefault();

    inputTempo.disabled = true;
    btnInicio.disabled = true;
    btnPausa.disabled = false;
    btnReset.disabled = false;

    tiempoRest = parseInt(inputTempo.value);

    if(isNaN(tiempoRest) || tiempoRest <= 0){
    alert('Error, ingresa un valor valido')
    return
    }

    spanCont.textContent = formato(tiempoRest)

    idInterval = setInterval(()=>{
        tiempoRest--;
        spanCont.textContent = formato(tiempoRest)

        if(tiempoRest <= 0){
            clearInterval(idInterval)
            spanCont.textContent = 'Se termino el tiempo establecido'
        }
    }, 1000)
})

btnPausa.addEventListener('click', ()=>{
    inputTempo.disabled = true;
    btnInicio.disabled = true;
    btnPausa.disabled = true;
    btnReset.disabled = false;

    clearInterval(idInterval)
})

btnReset.addEventListener('click', ()=>{
    inputTempo.disabled = false;
    btnInicio.disabled = false;
    btnPausa.disabled = true;
    btnReset.disabled = true;

    clearInterval(idInterval)
    tiempoRest = 0;
    spanCont.textContent = `${0}${0} : ${0}${0} : ${0}${0}`
    inputTempo.value = ''
})