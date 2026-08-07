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

    // Objeto con tipo explícito
    
    // Usando interfaces
    interface HeroInterface {
        id: number;
        name: string;
        age: number;
        powers: string[];
    }

    const usuario : HeroInterface = {
        id: 1,
        name: 'Batman',
        age: 30,
        powers: ['Inteligencia', 'Dinero']
    };

    console.log(usuario.name);

    // Usando type
    type HeroType = {
        id: number;
        name: string;
        age: number;
        powers: string[];
    }

    const usuario2 : HeroType = {
        id: 2,
        name: 'Superman',
        age: 28,
        powers: ['Super fuerza', 'Volar']
    };

    console.log(usuario2.name);

    // Objetos con propiedades obligatorios y opcionales
    // Por defecto todas las propiedades son obligatorias, 
    // pero podemos hacer que algunas sean opcionales usando el signo de interrogación (?)
    // Por ejemplo:

    // Propiedades Obligatorias
    interface HeroMandatory {
        id: number;
        name: string;
        age: number;
        powers: string[];
    }

    const heroMandatory : HeroMandatory = {
        id: 3,
        name: 'Wonder Woman',
        age: 25,
        powers: ['Super fuerza', 'Agilidad']
    };

    console.log(heroMandatory.name);

    // Propiedades Opcionales
    interface HeroOptional {
        id: number;
        name: string;
        age?: number; // Propiedad opcional
        powers: string[];
    }

    const heroOptional : HeroOptional = {
        id: 4,
        name: 'Green Lantern',
        // age es opcional, por lo que no es necesario incluirlo
        powers: ['Anillo de poder', 'Vuelo']
    };

    console.log(heroOptional.name);
    
    // Propiedades de solo lectura
    // Podemos hacer que algunas propiedades sean de solo lectura usando el modificador readonly
    // Con esta propiedad, no podremos modificar el valor de la propiedad una vez que se haya asignado.
    interface HeroReadOnly {
        readonly id: number; // Propiedad de solo lectura
        name: string;
        age: number;
        powers: string[];
    }

    const heroReadOnly : HeroReadOnly = {
        id: 5,
        name: 'Aquaman',
        age: 32,
        powers: ['Control del agua', 'Super fuerza']
    };

    // heroReadOnly.id = 1; // Esto es inválido, ya que id es de solo lectura
    console.log(heroReadOnly.name);

    interface Diccionario {
        [key: string]: string;
    }

    const palabras : Diccionario = {
        hola: 'Hello',
        adios: 'Goodbye',
        gracias: 'Thank you'
    };

    palabras['bienvenido'] = 'Welcome';
    console.log(palabras);

    interface Animal{
        nombre: string;
        edad: number;
    }

    interface Perro extends Animal{
        raza: string;
        traerObjeto(): void;
    }

    const miPerro : Perro = {
        nombre: 'Firulais',
        edad: 3,
        raza: 'Labrador',
        traerObjeto() {
            console.log('Trae la pelota');
        }
    }

    console.log(miPerro.nombre);
    miPerro.traerObjeto();


    var batimovil = {
        puertas: 10,
        marca: "Sedan"
    }

    console.log(typeof batimovil.puertas);
})()