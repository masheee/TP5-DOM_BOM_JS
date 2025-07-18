//Crear una web con un reloj que muestre la siguiente información:
//*RELOJ* (fecha actual (dia, mes y año) + hora actual (horas, minutos y segundos))

//fecha
const fecActual = new Date();

const opFecha = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

const formatoFecha = fecActual.toLocaleDateString(undefined, opFecha);
console.log(formatoFecha);

const fecha = document.getElementById('fec')

fecha.textContent = formatoFecha;

//hora
setInterval(()=>{
    const horaActual = new Date();

    let horas = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();

    horas = horas.toString().padStart(2,'0');
    minutos = minutos.toString().padStart(2,'0');
    segundos = segundos.toString().padStart(2,'0');

    document.getElementById('h').textContent = horas;
    document.getElementById('m').textContent = minutos;
    document.getElementById('s').textContent = segundos;

}, 1000)





