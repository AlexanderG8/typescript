// Interface Usuario
interface Usuario {
    nombre: string;
    apellido: string;
    edad: number;
}
// Interface UsuarioConDireccion que extiende de Usuario
interface UsuarioConDireccion extends Usuario {
    direccion: string;
    ciudad: string;
}
// Almacenamos un objeto de tipo UsuarioConDireccion en la variable usuario1
const usuario1: UsuarioConDireccion = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    direccion: "Calle Falsa 123",
    ciudad: "Ciudad de México"
};
// Retornamos el objeto usuario1 en la consola
console.log(usuario1);