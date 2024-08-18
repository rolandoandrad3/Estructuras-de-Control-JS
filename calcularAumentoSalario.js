/*CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
*/
function calcularAumento(nombre, salario, categoria) {
    let aumento;

    // Determinar el porcentaje de aumento basado en la categoría
    switch (categoria.toUpperCase()) {
        case 'A':
            aumento = salario * 0.15;
            break;
        case 'B':
            aumento = salario * 0.30;
            break;
        case 'C':
            aumento = salario * 0.10;
            break;
        case 'D':
            aumento = salario * 0.20;
            break;
        default:
            aumento = 0;
            console.log("Categoría no válida.");
            return;
    }

    // Mostrar los datos del empleado y el aumento salarial
    console.log("Nombre: " + nombre);
    console.log("Salario Actual: $" + salario.toFixed(2));
    console.log("Categoría: " + categoria);
    console.log("Aumento Salarial: $" + aumento.toFixed(2));
    console.log("Nuevo Salario: $" + (salario + aumento).toFixed(2));
}

// Ejemplo de uso:
calcularAumento("María López", 2000, "B");
calcularAumento("Juan Pérez", 1500, "A");
calcularAumento("Carlos García", 3000, "C");