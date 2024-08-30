function contadorDeCaracteres() {
    const elementos = {
        areaDeTexto: '[data-js="area-de-texto"]',
        contador: '[data-js="contador-de-caracteres"]',
    }

    const areaDeTexto = document.querySelector(elementos.areaDeTexto);
    const contador = document.querySelector(elementos.contador);
    const limiteDeCaracteres = areaDeTexto.getAttribute('maxlength');

    contador.textContent = parseInt(limiteDeCaracteres) - +areaDeTexto.value.length;
}

export default contadorDeCaracteres;