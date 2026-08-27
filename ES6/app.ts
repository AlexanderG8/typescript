(() => {
    // Desestructuración con objetos
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironMan: 'Tony Stark',
        vision: 'Paul Bettany'
    };
    // Aquí puedes desestructurar el objeto avengers y obtener el valor de la propiedad nick, asignándolo a una variable con el mismo nombre.
    const {nick} = avengers;

    // Recomendación para desestructuración de objetos: Siempre debes especificar el tipo de dato en un objeto, podrías utilizar Type
    type Avanger = {
        nombre: string,
        poder: number,
        estado: boolean
    }

    const avengers2: Avanger = {
        nombre: 'Samuel L. Jackson',
        poder: 100,
        estado: true
    };

    const {nombre, poder, estado} = avengers2;

    console.log(nombre);

    // Desestructuración con arreglos
    const avengersArr: string[] = ['Samuel L. Jackson', 'Tony Stark', 'Paul Bettany'];
    // Aquí si deseas obtener el segundo elemento del arreglo, puedes usar una coma para omitir el primer elemento y luego asignar el segundo a la variable tony
    // Y así sucesivamente, puedes omitir los elementos que no deseas obtener y asignar los que sí deseas a variables.
    const [,tony,] = avengersArr;

    console.log(tony);

    // Recomendación para desestructuración de arreglos: Siempre debes especificar el tipo de dato en un arreglo.
    const avengersArr2: [string, number, boolean] = ['Samuel L. Jackson', 100, true];
    // Aquí al pasar por el nombre de la variable, les va mostar el tipo de dato que es cada elemento de un arreglo.
    const [nombreAvenger, poderAvenger, estadoAvender] = avengersArr2;
    console.log(nombreAvenger, poderAvenger, estadoAvender);


    // Ciclo for...of
    // El ciclo for...of es una forma de iterar sobre los elementos de un arreglo, y en cada iteración, se obtiene el valor del elemento actual.
    type Avenger2 = {
        nombre: string,
        weapon: string
    }

    const ironman : Avenger2 = {
        nombre: 'Tony Stark',
        weapon: 'Armorsuit'
    };

    const capitanAmerica : Avenger2 = {
        nombre: 'Capitán América',
        weapon: 'Escudo'
    };
    const thor : Avenger2 = {
        nombre: 'Thor',
        weapon: 'Mjolnir'
    };
    
    const avengers3: Avenger2[] = [ironman, capitanAmerica, thor];
    // Aquí el valor de la variable avenger, va a ser el valor de cada elemento del arreglo avengers3, en cada iteración del ciclo for...of.
    for (const avenger of avengers3) {
        // Y podemos acceder a las propiedades de cada elemento del arreglo, como nombre y weapon.
        console.log(avenger.nombre, avenger.weapon);
    }

    let numero : number = 20;

    if(numero > 0){
        numero = 10;
    }

    console.log(numero);
})();