
function excluirTag(evento) {

    const elementos = {
        formularioListaTags: '[data-js="formulario-lista-tags"]',
    }

    const formularioListaTags = document.querySelector(elementos.formularioListaTags);

    const botaoExcluir = evento.target.closest('[data-js="botao-excluir-tag"]');
    if (botaoExcluir) {
        const tagEscolhida = botaoExcluir.parentElement;
        formularioListaTags.removeChild(tagEscolhida);
    }
}

export default excluirTag;