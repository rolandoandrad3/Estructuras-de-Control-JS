/*Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. */
function encontrarMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else if (numero2 > numero1) {
        return numero2;
    } else {
        return "Ambos números son iguales";
    }
}

// Ejemplo de uso:
let num1 = 5;
let num2 = 3;

let mayor = encontrarMayor(num1, num2);
console.log("El número mayor es: " + mayor);
