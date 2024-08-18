/* Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15% */
function calcularDescuentoViaje(origen, destino) {
    let descuento = 0;

    // Verificar las condiciones para aplicar el descuento
    if (origen.toLowerCase() === "palma") {
        switch (destino.toLowerCase()) {
            case "la costa del sol":
                descuento = 0.05;
                break;
            case "panchimalco":
                descuento = 0.10;
                break;
            case "puerto el triunfo":
                descuento = 0.15;
                break;
            default:
                descuento = 0;
                console.log("Destino no aplica para un descuento.");
                break;
        }
    } else {
        console.log("El origen no aplica para un descuento.");
    }

    // Retornar el descuento
    return descuento;
}

// Ejemplo de uso:
let origen = "Palma";
let destino = "puerto el triunfo";

let descuentoAplicado = calcularDescuentoViaje(origen, destino);
console.log(`Origen: ${origen}`);
console.log(`Destino: ${destino}`);
console.log(`Descuento aplicado: ${descuentoAplicado * 100}%`);
