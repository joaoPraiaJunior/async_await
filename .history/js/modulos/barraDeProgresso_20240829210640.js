function barraDeProgresso(contador) {

    const elementos = {
        barraDeProgresso: '[data-js="barra-de-progresso"]',
        progresso: '[data-js="progresso"]',
    }
    console.log(`Progresso: ${contador + 1 * 100}%`);
}

export default barraDeProgresso;