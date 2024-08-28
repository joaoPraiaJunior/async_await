import manipularMensagemDeErro from "./manipularMensagemDeErro";


function verificaListaDeTags() {

    const elementos = {
        formularioListaTags: '[data-js="formulario-lista-tags"]',
    }

    const formularioListaTags = document.querySelector(elementos.formularioListaTags);

    if (!formularioListaTags.children.length) {
        manipularMensagemDeErro('Adicione pelo menos uma tag ao projeto');
    } else {
        manipularMensagemDeErro('');
    }


}

export default verificaListaDeTags;