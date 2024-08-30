import manipularMensagemDeErro from './manipularMensagemDeErro.js';
import publicarDadosDoProjeto from './publicarDadosDoProjeto.js';

async function enviarDados(evento) {

    const elementos = {
        formularioListaTags: '[data-js="formulario-lista-tags"]',
        formulario: '[data-js="formulario"]',
    }

    const formularioListaTags = document.querySelector(elementos.formularioListaTags);
    const formulario = document.querySelector(elementos.formulario);

    evento.preventDefault();

    const nomeDoProjeto = formulario.projeto.value;
    const descricaoDoProjeto = formulario.descricao.value;
    const tags = Array.from(formularioListaTags.children).map(tag => tag.querySelector('p').textContent);

    console.log(imagemDoProjeto);

    try {
        const mensagem = await publicarDadosDoProjeto(nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto);
        manipularMensagemDeErro(mensagem);
    } catch (erro) {
        console.error('Erro ao publicar projeto', erro);
        manipularMensagemDeErro(erro);
    }
}

export default enviarDados;