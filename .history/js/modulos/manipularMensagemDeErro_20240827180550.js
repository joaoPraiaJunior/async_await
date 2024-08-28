import { mensagemDeErro } from './variaveis.js';

function manipularMensagemDeErro(erro) {

    const elementos = {
        mensagemDeErro: '[data-js="mensagem-de-erro"]',
    }

    if (erro) {
        mensagemDeErro.textContent = erro;
        mensagemDeErro.classList.add('piscar');
        mensagemDeErro.setAttribute('aria-hidden', false);
        mensagemDeErro.setAttribute('role', 'alert');
        mensagemDeErro.setAttribute('tabindex', 0); // Para que o leitor de tela leia a mensagem
    } else {
        mensagemDeErro.textContent = '';
        mensagemDeErro.classList.remove('piscar');
        mensagemDeErro.setAttribute('aria-hidden', true);
        mensagemDeErro.removeAttribute('role');
        mensagemDeErro.removeAttribute('tabindex');
    }
}

export default manipularMensagemDeErro