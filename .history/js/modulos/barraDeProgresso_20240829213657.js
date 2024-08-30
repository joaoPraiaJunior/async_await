function barraDeProgresso(contador, intervalo) {

    const elementos = {
        barraDeProgresso: '[data-js="barra-de-progresso"]',
        progresso: '[data-js="progresso"]',
    }

    const barraDeProgresso = document.querySelector(elementos.barraDeProgresso);
    const progresso = document.querySelector(elementos.progresso);

   progresso.value = contador + 1 * 100

    if (contador === 100) {
        clearInterval(intervalo);
        barraDeProgresso.style.display = 'none';
    }
}

export default barraDeProgresso;