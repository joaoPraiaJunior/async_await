import manipularMensagemDeErro from './manipularMensagemDeErro.js';
import publicarDadosDoProjeto from './publicarDadosDoProjeto.js';

async function enviarDados(evento) {

    const elementos = {
        formularioListaTags: '[data-js="formulario-lista-tags"]',
        formulario: '[data-js="formulario"]',
        upLoadDeImagem: '[data-js="upload-de-imagem"]',
    }

    const formularioListaTags = document.querySelector(elementos.formularioListaTags);
    const formulario = document.querySelector(elementos.formulario);
    const upLoadDeImagem = document.querySelector(elementos.upLoadDeImagem);

    evento.preventDefault();

    const nomeDoProjeto = formulario.projeto.value;
    const descricaoDoProjeto = formulario.descricao.value;
    const imagemDoProjeto = upLoadDeImagem.files[0];
    const tags = Array.from(formularioListaTags.children).map(tag => tag.querySelector('p').textContent);

    try {
        const mensagem = await publicarDadosDoProjeto(nomeDoProjeto, descricaoDoProjeto, tags);
        manipularMensagemDeErro(mensagem);
    } catch (erro) {
        console.error('Erro ao publicar projeto', erro);
        manipularMensagemDeErro(erro);
    }
}

export default enviarDados;