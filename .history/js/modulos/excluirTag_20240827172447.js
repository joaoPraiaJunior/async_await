import { formularioListaTags } from './variaveis.js';

function excluirTag(evento) {
    const botaoExcluir = evento.target.closest('[data-js="botao-excluir-tag"]');
    if (botaoExcluir) {
        const tagEscolhida = botaoExcluir.parentElement;
        formularioListaTags.removeChild(tagEscolhida);
    }
}

export default excluirTag;