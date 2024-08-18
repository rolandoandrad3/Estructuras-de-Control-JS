function mostrarTabla() {
    // Obtener el valor ingresado por el usuario
    const numero = parseInt(document.getElementById("numero").value);
    const resultados = [];

    // Generar la tabla de multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++) {
        resultados.push(`${numero} x ${i} = ${numero * i}`);
    }

    // Mostrar los resultados en el elemento <pre>
    document.getElementById("tablaMultiplicar").innerText = resultados.join('\n');
}
