//Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
//mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
//Para realizar este método tener en cuenta la siguiente tabla de generaciones:
//*TABLA*
//esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
//mostrarDatos: devuelve toda la información del objeto.
//Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioNac){
        this.nombre = nombre; 
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNac = anioNac;
    }

    mostrarGeneracion(){
        const age = this.edad;

        if(age >= 62 && age <= 80){
            alert(`Usted pertenece a la generacion "Silent Generation" y posee el rasgo caracteristico de la "Austeridad" `)
        }else if(age >= 42 && age <= 61){
            alert(`Usted pertenece a la generacion "Baby Boom" y posee el rasgo caracteristico de la "Ambicion" `)
        }else if(age >= 30 && age <= 41){
            alert(`Usted pertenece a la generacion "Generacion X" y posee el rasgo caracteristico de la "Obsesion por el exito" `)
        }else if(age >= 17 && age <= 29){
            alert(`Usted pertenece a la generacion "Generacion Y" y posee el rasgo caracteristico de la "Frustracion" `)
        }else if(age >= 1 && age <= 16){
            alert(`Usted pertenece a la generacion "Generacion Z" y posee el rasgo caracteristico de la "Irreverencia" `)
        }else {
            alert(`Edad fuera del parametro`);
        }

        this.edad = age;
    }

    esMayorDeEdad(){
        if(this.edad >= 18){
            alert(`Usted es mayor de edad`)
        }else{
            alert(`Usted NO es mayor de edad`)
        }
    }

     mostrarDatos() {
        alert(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexo}
        Peso: ${this.peso} kg
        Altura: ${this.altura} cm
        Año de nacimiento: ${this.anioNac}
        `);
    }
}

let newPersona = null;

const formulario = document.querySelector('form')
const generacion = document.querySelector('.btn-primary')
const edadMayor = document.querySelector('.btn-danger')

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const edad = parseInt(document.querySelector('#edad').value);
    const dni = document.querySelector('#dni').value;
    const sexo = document.querySelector('#sexo').value;
    const peso = parseFloat(document.querySelector('#peso').value);
    const altura = parseFloat(document.querySelector('#altura').value);
    const anioNac = parseInt(document.querySelector('#anioNac').value);
    
    newPersona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNac)
    newPersona.mostrarDatos();
})

generacion.addEventListener('click', function(){
    if(!newPersona){
        alert('Se requiere que ingrese sus datos antes de proceder!')
        return;
    }
    newPersona.mostrarGeneracion();
})

edadMayor.addEventListener('click', function(){
    if(!newPersona){
        alert('Se requiere que ingrese sus datos antes de proceder!')
        return;
    }
    newPersona.esMayorDeEdad();
})


