//Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.gast

const btnIniciar = document.querySelector('.btn-success')
const btnPausar = document.querySelector('.btn-primary')
const btnReset = document.querySelector('.btn-danger')
const spanContador = document.querySelector('.fw-bold')
let contador = 0;
let idInterval;

btnPausar.disabled = true;
btnReset.disabled = true;

btnIniciar.addEventListener('click', ()=>{
    btnIniciar.disabled = true
    btnPausar.disabled = false
    btnReset.disabled = false
    
    idInterval = setInterval(()=>{
        contador++;

        const horas = Math.floor(contador / 3600);
        const minutos = Math.floor((contador % 3600) / 60);
        const segundos = contador % 60;

        const formato = `${horas.toString().padStart(2,'0')} : ${minutos.toString().padStart(2,'0')} : ${segundos.toString().padStart(2,'0')}`;
        spanContador.textContent = formato;
    }, 1000)
})  

btnPausar.addEventListener('click', ()=>{
    btnIniciar.disabled = true
    btnPausar.disabled = true
    btnReset.disabled = false

    clearInterval(idInterval);
})

btnReset.addEventListener('click', ()=>{
    btnIniciar.disabled = false
    btnPausar.disabled = true
    btnReset.disabled = true

    clearInterval(idInterval);
    contador = 0;

    const formato = `${0}${0} : ${0}${0} : ${0}${0}`;
    spanContador.textContent = formato;
})