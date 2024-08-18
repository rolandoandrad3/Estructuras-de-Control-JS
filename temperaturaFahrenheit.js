function convertirTemperatura() {
    // Obtener la temperatura en Celsius ingresada por el usuario
    const celsius = parseFloat(document.getElementById("celsius").value);

    // Convertir Celsius a Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Mostrar la temperatura en Fahrenheit
    document.getElementById("resultadoFahrenheit").innerText = `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F`;

    // Clasificar la temperatura en Fahrenheit
    let clasificacion = "";
    if (fahrenheit >= 14 && fahrenheit < 32) {
        clasificacion = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        clasificacion = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        clasificacion = "Temperatura alta";
    } else {
        clasificacion = "Temperatura desconocida";
    }

    // Mostrar la clasificación
    document.getElementById("clasificacion").innerText = clasificacion;
}
