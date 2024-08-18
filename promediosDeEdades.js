function calcularPromedios() {
    // Obtener las edades de cada turno
    const edadesManana = [];
    for (let i = 1; i <= 5; i++) {
        edadesManana.push(parseInt(document.getElementById(`edadManana${i}`).value));
    }

    const edadesTarde = [];
    for (let i = 1; i <= 6; i++) {
        edadesTarde.push(parseInt(document.getElementById(`edadTarde${i}`).value));
    }

    const edadesNoche = [];
    for (let i = 1; i <= 11; i++) {
        edadesNoche.push(parseInt(document.getElementById(`edadNoche${i}`).value));
    }

    // Calcular promedios
    const promedioManana = edadesManana.reduce((a, b) => a + b, 0) / edadesManana.length;
    const promedioTarde = edadesTarde.reduce((a, b) => a + b, 0) / edadesTarde.length;
    const promedioNoche = edadesNoche.reduce((a, b) => a + b, 0) / edadesNoche.length;

    // Mostrar los promedios
    document.getElementById("promedioManana").innerText = `Promedio de edades del turno mañana: ${promedioManana.toFixed(2)}`;
    document.getElementById("promedioTarde").innerText = `Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}`;
    document.getElementById("promedioNoche").innerText = `Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}`;

    // Determinar cuál turno tiene el promedio más alto
    let mayorTurno = "";
    let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);

    if (mayorPromedio === promedioManana) {
        mayorTurno = "mañana";
    } else if (mayorPromedio === promedioTarde) {
        mayorTurno = "tarde";
    } else if (mayorPromedio === promedioNoche) {
        mayorTurno = "noche";
    }

    document.getElementById("mayorPromedio").innerText = `El turno con el promedio de edades más alto es el turno ${mayorTurno}.`;
}
