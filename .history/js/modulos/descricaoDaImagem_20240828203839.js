function descricaoDaImagem(nomeDaImagem) {

    const paragrafo = createElement('p');
    paragrafo.textContent = nomeDaImagem;
    const botao = createElement('button');
    botao.classList.add('c-botao', 'c-botao--fechar');
    botao.setAttribute('aria-label', 'Exluir imagem');
    botao.setAttribute('type', 'button');
    botao.dataset.js = 'excluir-imagem';

    return `${paragrafo} ${botao}`;

}

export default descricaoDaImagem;