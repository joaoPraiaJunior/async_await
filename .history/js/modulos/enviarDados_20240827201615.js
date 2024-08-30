import lerConteudoDoArquivo from './lerConteudoDoArquivo.js';
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

    const nomeDoProjeto = formulario.projeto.value;
    const descricaoDoProjeto = formulario.descricao.value;
    const tags = Array.from(formularioListaTags.children).map(tag => tag.querySelector('p').textContent);
    const imagemDoProjeto = await lerConteudoDoArquivo(inputUploadImagem.files[0]);
    const nomeDaImagem = imagemDoProjeto.nome;
    const urlDaImagem = imagemDoProjeto.url;

    const dados = {
        nomeDoProjeto: nomeDoProjeto,
        descricaoDoProjeto: descricaoDoProjeto,
        tags: tags,
        nomeDaImagem: nomeDaImagem,
        urlDaImagem: urlDaImagem,
    }

    console.log('Dados do projeto', dados);

    try {
        const mensagem = await publicarDadosDoProjeto(dados);
        manipularMensagemDeErro(mensagem);
    } catch (erro) {
        console.error('Erro ao publicar projeto', erro);
        manipularMensagemDeErro(erro);
    }
}

export default enviarDados;