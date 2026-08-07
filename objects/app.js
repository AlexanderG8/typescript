"use strict";
(() => {
    // Objeto literal
    const heroe = {
        name: 'Flash',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    // Con los objetos literales no hay seguridad si añades propiedades nuevas
    // heroe.debility = 'Vulnerable a la magia';
    // console.log(heroe.debility);
    console.log(heroe.name);
    console.log(heroe.age);
    console.log(heroe.powers);
    console.log(heroe);
    const usuario = {
        id: 1,
        name: 'Batman',
        age: 30,
        powers: ['Inteligencia', 'Dinero']
    };
    console.log(usuario.name);
    const usuario2 = {
        id: 2,
        name: 'Superman',
        age: 28,
        powers: ['Super fuerza', 'Volar']
    };
    console.log(usuario2.name);
    const heroMandatory = {
        id: 3,
        name: 'Wonder Woman',
        age: 25,
        powers: ['Super fuerza', 'Agilidad']
    };
    console.log(heroMandatory.name);
    const heroOptional = {
        id: 4,
        name: 'Green Lantern',
        // age es opcional, por lo que no es necesario incluirlo
        powers: ['Anillo de poder', 'Vuelo']
    };
    console.log(heroOptional.name);
    const heroReadOnly = {
        id: 5,
        name: 'Aquaman',
        age: 32,
        powers: ['Control del agua', 'Super fuerza']
    };
    // heroReadOnly.id = 1; // Esto es inválido, ya que id es de solo lectura
    console.log(heroReadOnly.name);
    const palabras = {
        hola: 'Hello',
        adios: 'Goodbye',
        gracias: 'Thank you'
    };
    palabras['bienvenido'] = 'Welcome';
    console.log(palabras);
    const miPerro = {
        nombre: 'Firulais',
        edad: 3,
        raza: 'Labrador',
        traerObjeto() {
            console.log('Trae la pelota');
        }
    };
    console.log(miPerro.nombre);
    miPerro.traerObjeto();
    var batimovil = {
        puertas: 10,
        marca: "Sedan"
    };
    console.log(typeof batimovil.puertas);
})();
