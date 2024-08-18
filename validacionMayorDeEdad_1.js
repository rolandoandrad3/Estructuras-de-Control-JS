/*Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.*/
function validarEdad(edad) {
    return edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
}  
console.log(validarEdad(20)); // "Es mayor de edad"
console.log(validarEdad(15)); // "No es mayor de edad"
console.log(validarEdad(18)); // "Es mayor de edad"
