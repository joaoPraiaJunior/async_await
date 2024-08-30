function barraDeProgresso(contador) {

    const elementos = {
        barraDeProgresso: '[data-js="barra-de-progresso"]',
        progresso: '[data-js="progresso"]',
    }

    const barraDeProgresso = document.querySelector(elementos.barraDeProgresso);
    const progresso = document.querySelector(elementos.progresso);

   progresso.value = contador + 1 * 100
}

export default barraDeProgresso;