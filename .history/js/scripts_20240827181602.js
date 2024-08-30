
import criarTagsDoProjeto from "./modulos/criarTagsDoProjeto.js";
import descartarDadosDoFormulario from "./modulos/descartarDadosDoFormulario.js";
import enviarDados from "./modulos/enviarDados.js";
import excluirTag from "./modulos/excluirTag.js";
import uploadDeImagem from "./modulos/uploadDeImagem.js";

function iniciarAplicacao() {

    const elementos = {
        botaoUploadImagem: '[data-js="upload-de-imagem"]',
        inputUploadImagem: '[data-js="input-upload-imagem"]',
        formulario: '[data-js="formulario"]',
        inputTags: '[data-js="input-tags"]',
        formularioListaTags: '[data-js="formulario-lista-tags"]',
        botaoExluirDadosFormulario: '[data-js="botao-excluir-dados-formulario"]',
    }
    
    const botaoUploadImagem = document.querySelector(elementos.botaoUploadImagem);
    const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);
    const formulario = document.querySelector(elementos.formulario);
    const botaoExluirDadosFormulario = document.querySelector(elementos.botaoExluirDadosFormulario);
    const formularioListaTags = document.querySelector(elementos.formularioListaTags);
    const inputTags = document.querySelector(elementos.inputTags);

    botaoUploadImagem.addEventListener('click', () => {
        inputUploadImagem.click();
    });
    
    formularioListaTags.addEventListener('click', excluirTag);
    inputUploadImagem.addEventListener('change', uploadDeImagem);
    inputTags.addEventListener('keypress', criarTagsDoProjeto);
    formulario.addEventListener('submit', enviarDados);
    botaoExluirDadosFormulario.addEventListener('click', descartarDadosDoFormulario);

}

window.addEventListener('load', iniciarAplicacao);