/*Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.  */
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    // Pesos de cada componente
    const pesoExamen = 0.20;
    const pesoTareas = 0.40;
    const pesoAsistencia = 0.10;
    const pesoInvestigacion = 0.30;

    // Calcular la nota final
    const notaFinal = (examen * pesoExamen) + 
                      (tareas * pesoTareas) + 
                      (asistencia * pesoAsistencia) + 
                      (investigacion * pesoInvestigacion);

    // Mostrar los datos del alumno y la nota final
    console.log("Nombre: " + nombre);
    console.log("Carnet: " + carnet);
    console.log("Nota Final: " + notaFinal.toFixed(2)); // Redondea la nota final a dos decimales
}

// Ejemplo de uso:
calcularNotaFinal("Rolando Andrade", "123456789", 85, 90, 95, 80);
