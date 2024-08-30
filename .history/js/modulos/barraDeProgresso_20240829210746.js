function barraDeProgresso(contador) {

    const elementos = {
        barraDeProgresso: '[data-js="barra-de-progresso"]',
        progresso: '[data-js="progresso"]',
    }

    const barraDeProgresso = document.querySelector(elementos.barraDeProgresso);
    const progresso = document.querySelector(elementos.progresso);

    barraDeProgresso.style.display = 'block';
    console.log(`Progresso: ${contador + 1 * 100}%`);
    barraDeProgresso.style.display = 'none';
}

export default barraDeProgresso;