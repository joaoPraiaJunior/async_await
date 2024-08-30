function descricaoDaImagemEscolhida(nomeDaImagem) {

    const paragrafo = document.createElement('p');
    paragrafo.textContent = nomeDaImagem;
    const botao = document.createElement('button');
    botao.classList.add('c-botao', 'c-botao--fechar');
    botao.setAttribute('aria-label', 'Exluir imagem');
    botao.setAttribute('type', 'button');
    botao.dataset.js = 'botao-excluir-imagem';

    return `${paragrafo.outerHTML} ${botao.outerHTML}`;

}

export default descricaoDaImagemEscolhida;