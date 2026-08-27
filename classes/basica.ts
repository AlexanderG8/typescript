(() => {
    // Poner en practica todo lo aprendido
    // Debes crear una clase llamada Persona que tenga las siguientes propiedades: nombre, edad y género. 
    // La clase debe tener un constructor que reciba estos valores como parámetros y los asigne a las propiedades correspondientes. 
    // Además, la clase debe tener un método llamado saludar que devuelva un mensaje de saludo que incluya el nombre de la persona.

    class Persona{
        constructor(
            public nombre: string,
            public edad: number,
            public genero: string
        ){}

        get saludar(){
                return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}.`;
        }

        set saludar(mensaje: string){
            console.log(mensaje);
        }
    }

    const persona1 = new Persona("Juan", 30, "masculino");
    console.log(persona1.saludar);
    persona1.saludar = "Hola, soy Juan y tengo 30 años.";
})();