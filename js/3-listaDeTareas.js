//Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin

const tareas = [];

const agregarTarea = document.querySelector('.btn-success')
const mostrarLista = document.querySelector('.btn-primary')
const eliminarTarea = document.querySelector('.btn-danger')

agregarTarea.addEventListener('click', function(event){
    event.preventDefault();

    const tarea1 = document.querySelector('#aTarea')

    if(tarea1.value.trim()){
        tareas.push(tarea1.value.trim())
        tarea1.value = '';
    }else{
        alert('Escriba primero la tarea que desea ingresar!')
    }
})

mostrarLista.addEventListener('click', function(){
    if(tareas.length === 0){
        alert('No hay tareas para mostrar en la lista')
        return;
    }

    let lista = '';

    for(let i = 0; i < tareas.length; i++){
        lista += `${i + 1} - ${tareas[i]} \n`;
    }

    alert(lista)
})

eliminarTarea.addEventListener('click', function(event){
    event.preventDefault();

    const borrar = document.querySelector('#eTarea')
    const numBorrar = parseInt(borrar.value)

    if(isNaN(numBorrar) || numBorrar < 1 || numBorrar > tareas.length){
        alert(`Tarea no encontrada, ingrese el numero minimo (1) o el maximo de tareas de esta lista (${tareas.length})`)
        return;
    }

    const tareaBorrada = tareas.splice(numBorrar - 1, 1)

    alert(`Tarea *${tareaBorrada[0]}* eliminada correctamente!`)
    borrar.value = '';
})
