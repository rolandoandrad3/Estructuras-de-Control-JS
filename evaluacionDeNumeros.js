class AnalizadorDeNumeros {
    constructor() {
        this.cantidadNegativos = 0;
        this.cantidadPositivos = 0;
        this.cantidadMultiplosDe15 = 0;
        this.sumaPares = 0;
    }

    calcular() {
        // Recoger los valores del formulario
        for (let i = 1; i <= 10; i++) {
            const numero = parseInt(document.getElementById(`numero${i}`).value);

            // Verificar si el número es negativo
            if (numero < 0) {
                this.cantidadNegativos++;
            }

            // Verificar si el número es positivo
            if (numero > 0) {
                this.cantidadPositivos++;
            }

            // Verificar si el número es múltiplo de 15
            if (numero % 15 === 0) {
                this.cantidadMultiplosDe15++;
            }

            // Verificar si el número es par y acumularlo
            if (numero % 2 === 0) {
                this.sumaPares += numero;
            }
        }

        // Mostrar los resultados en HTML
        document.getElementById("resultadoNegativos").innerText = "Cantidad de valores negativos ingresados: " + this.cantidadNegativos;
        document.getElementById("resultadoPositivos").innerText = "Cantidad de valores positivos ingresados: " + this.cantidadPositivos;
        document.getElementById("resultadoMultiplos15").innerText = "Cantidad de múltiplos de 15: " + this.cantidadMultiplosDe15;
        document.getElementById("resultadoSumaPares").innerText = "Suma de los números pares: " + this.sumaPares;
    }
}

function analizarNumeros() {
    const analizador = new AnalizadorDeNumeros();
    analizador.calcular();
}
