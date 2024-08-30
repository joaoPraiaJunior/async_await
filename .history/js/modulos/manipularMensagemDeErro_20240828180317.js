
function manipularMensagemDeErro(erro) {

    const elementos = {
        mensagemDeErro: '[data-js="mensagem-de-erro"]',
    }

    const mensagemDeErro = document.querySelector(elementos.mensagemDeErro);
    let ajustarAnimacao = null;

    if (erro) {
        mensagemDeErro.textContent = erro;
        mensagemDeErro.classList.add('piscar');
        mensagemDeErro.setAttribute('aria-hidden', false);
        mensagemDeErro.setAttribute('role', 'alert');
        mensagemDeErro.setAttribute('tabindex', 0); // Para que o leitor de tela leia a mensagem
    }

    pararAnimacao();
    animacao();


function animacao() {
    ajustarAnimacao = setTimeout(() => {
        mensagemDeErro.textContent = '';
        mensagemDeErro.classList.remove('piscar');
        mensagemDeErro.setAttribute('aria-hidden', true);
        mensagemDeErro.removeAttribute('role');
        mensagemDeErro.removeAttribute('tabindex');
    }, 15000);
}

function pararAnimacao() {
    if (ajustarAnimacao) {
        clearTimeout(ajustarAnimacao);
        ajustarAnimacao = null;
    }
}
}



export default manipularMensagemDeErro