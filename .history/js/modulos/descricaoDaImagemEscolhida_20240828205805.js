function descricaoDaImagemEscolhida(nomeDaImagem) {

    const div = document.createElement('div');
    const paragrafo = document.createElement('p');
    paragrafo.textContent = nomeDaImagem;
    const botao = document.createElement('button');
    botao.classList.add('c-botao', 'c-botao--fechar');
    botao.setAttribute('aria-label', 'Exluir imagem');
    botao.setAttribute('type', 'button');
    botao.dataset.js = 'excluir-imagem';
    div.appendChild(paragrafo);
    div.appendChild(botao);

    return div

}

export default descricaoDaImagemEscolhida;