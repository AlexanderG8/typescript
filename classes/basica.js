"use strict";
(() => {
    // Poner en practica todo lo aprendido
    // Debes crear una clase llamada Persona que tenga las siguientes propiedades: nombre, edad y género. 
    // La clase debe tener un constructor que reciba estos valores como parámetros y los asigne a las propiedades correspondientes. 
    // Además, la clase debe tener un método llamado saludar que devuelva un mensaje de saludo que incluya el nombre de la persona.
    class Persona {
        nombre;
        edad;
        genero;
        constructor(nombre, edad, genero) {
            this.nombre = nombre;
            this.edad = edad;
            this.genero = genero;
        }
        get saludar() {
            return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}.`;
        }
        set saludar(mensaje) {
            console.log(mensaje);
        }
    }
    const persona1 = new Persona("Juan", 30, "masculino");
    console.log(persona1.saludar);
    persona1.saludar = "Hola, soy Juan y tengo 30 años.";
})();
