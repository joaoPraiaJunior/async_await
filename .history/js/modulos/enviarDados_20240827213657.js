import manipularMensagemDeErro from './manipularMensagemDeErro.js';
import publicarDadosDoProjeto from './publicarDadosDoProjeto.js';

async function enviarDados(evento) {

    const elementos = {
        formularioListaTags: '[data-js="formulario-lista-tags"]',
        formulario: '[data-js="formulario"]',
        inputUploadImagem: '[data-js="input-upload-imagem"]',
    }

    const formularioListaTags = document.querySelector(elementos.formularioListaTags);
    const formulario = document.querySelector(elementos.formulario);
    const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);

    evento.preventDefault();

    const nomeDoProjeto = formulario.projeto;
    const descricaoDoProjeto = formulario.descricao;
    const tags = Array.from(formularioListaTags.children).map(tag => tag.querySelector('p').textContent);
    const imagemDoProjeto = inputUploadImagem.files;
    const dados

    try {
        const mensagem = await publicarDadosDoProjeto(dados = {nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto});
        manipularMensagemDeErro(mensagem);
    } catch (erro) {
        console.error('Erro ao publicar projeto', erro);
        manipularMensagemDeErro(erro);
    }
}

export default enviarDados;