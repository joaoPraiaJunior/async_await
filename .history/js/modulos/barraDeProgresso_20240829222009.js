function barraDeProgresso(contador) {

    const elementos = {
        barraDeProgresso: '[data-js="barra-de-progresso"]',
        progresso: '[data-js="progresso"]',
    }

    const barraDeProgresso = document.querySelector(elementos.barraDeProgresso);
    const progresso = document.querySelector(elementos.progresso);

    const intervalo = setInterval(() => {
        progresso.value = contador + 1 * 100
        if(progresso.value === 100) {
            clearInterval(intervalo);
        }
    }, 1000);


    // if (contador === 10) {
    //     clearInterval(intervalo);
    //     barraDeProgresso.style.display = 'none';
    // }
}

export default barraDeProgresso;