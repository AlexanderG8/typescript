"use strict";
(() => {
    // Rest con números
    function sumarTodos(...numeros) {
        return numeros.reduce((suma, n) => suma + n, 0);
    }
    sumarTodos(1, 2, 3); // 6
    sumarTodos(5, 10, 15, 20); // 50
    sumarTodos(); // 0 (array vacío)
    // Rest con strings
    function concatenar(...palabras) {
        return palabras.join(" ");
    }
    concatenar("Hola", "mundo"); // "Hola mundo"
    concatenar("JavaScript", "es", "genial"); // "JavaScript es genial"
    function registrarUsuarios(...usuarios) {
        usuarios.forEach((u) => {
            console.log(`ID:${u.id}, Nombre:${u.nombre}`);
        });
    }
    registrarUsuarios({ id: 1, nombre: "Juan" }, { id: 2, nombre: "María" }, { id: 3, nombre: "Carlos" });
    // Un pequeño ejemplo de cómo usar rest parameters en una función que construye un nombre completo a
    // partir de un primer nombre y un número variable de apellidos.
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
