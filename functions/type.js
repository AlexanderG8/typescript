"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola, ${name}!`;
    const saveTheWorld = () => `¡El mundo está a salvo!`;
    /*
    * El tipo Function es un tipo genérico que acepta cualquier función, sin importar:
    * - Cuantos parámetros tiene.
    * - Qué tipos de parámetros recibe.
    * - Qué retorna.
    */
    let myFunction;
    /*
     * Otra forma de definir el tipo de una función es usando la sintaxis de flecha,
     * que es más explícita y permite definir los tipos de los parámetros y el tipo de retorno.
     */
    let myFunction2;
    let myFunction3;
    let myFunction4;
    myFunction = addNumbers;
    console.log(myFunction(5, 10));
    myFunction = greet;
    console.log(myFunction('Alexander'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
