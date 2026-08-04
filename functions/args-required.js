"use strict";
(() => {
    // Función con parametros obligatorios
    const paramsObligatorios = (firstName, lastname) => {
        return `${firstName} ${lastname}`;
    };
    const name = paramsObligatorios('Tony', 'Stark');
    console.log({ name });
    // Función con parametros opcionales
    const paramsOpcionales = (firstName, lastname) => {
        return `${firstName} ${lastname || '------'}`;
    };
    const name2 = paramsOpcionales('Tony');
    // Función con parametros que aceptan multiples tipos de datos
    const multiPrams = (multiparam) => {
        return multiparam;
    };
    console.log({ name2 });
    // Función con parametros con valor por defecto
    const paramsPorDefecto = (firstName, lastname, upper = false) => {
        if (upper) {
            return `${firstName} ${lastname || '------'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastname || '------'}`;
        }
    };
    console.log(paramsPorDefecto('Tony', 'Stark', true));
})();
