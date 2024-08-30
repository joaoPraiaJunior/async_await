

import contadorDeCaracteres from "./modulos/contadorDeCaracteres.js";
import criarTagsDoProjeto from "./modulos/criarTagsDoProjeto.js";
import descartarDadosDoFormulario from "./modulos/descartarDadosDoFormulario.js";
import enviarDados from "./modulos/enviarDados.js";
import excluirImagemApresentada from "./modulos/excluirImagemApresentada.js";
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
        descricaoDaImagem: '[data-js="descricao-da-imagem"]',
        areaDeTexto: '[data-js="area-de-texto"]',
    }

    const botaoUploadImagem = document.querySelector(elementos.botaoUploadImagem);
    const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);
    const formulario = document.querySelector(elementos.formulario);
    const botaoExluirDadosFormulario = document.querySelector(elementos.botaoExluirDadosFormulario);
    const formularioListaTags = document.querySelector(elementos.formularioListaTags);
    const inputTags = document.querySelector(elementos.inputTags);
    const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
    const areaDeTexto = document.querySelector(elementos.areaDeTexto);

    botaoUploadImagem.addEventListener('click', () => {
        inputUploadImagem.click();
    });

    formularioListaTags.addEventListener('click', excluirTag);
    inputUploadImagem.addEventListener('change', uploadDeImagem);
    inputTags.addEventListener('keypress', criarTagsDoProjeto);
    formulario.addEventListener('submit', enviarDados);
    botaoExluirDadosFormulario.addEventListener('click', descartarDadosDoFormulario);
    descricaoDaImagem.addEventListener('click', excluirImagemApresentada);
    areaDeTexto.addEventListener('input', contadorDeCaracteres);

}

window.addEventListener('load', iniciarAplicacao);