const elementos = {
    botaoUploadImagem: '[data-js="upload-de-imagem"]',
    inputUploadImagem: '[data-js="input-upload-imagem"]',
    imagem: '[data-js="imagem"]',
    descricaoDaImagem: '[data-js="descricao-da-imagem"]',
    mensagemDeErro: '[data-js="mensagem-de-erro"]',
    inputTags: '[data-js="input-tags"]',
    formularioListaTags: '[data-js="formulario-lista-tags"]',
    formulario: '[data-js="formulario"]',
    botaoExluirDadosFormulario: '[data-js="botao-excluir-dados-formulario"]',
}

export const botaoUploadImagem = document.querySelector(elementos.botaoUploadImagem);
export const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);
export const imagem = document.querySelector(elementos.imagem);
export const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
export const mensagemDeErro = document.querySelector(elementos.mensagemDeErro);
export const formulario = document.querySelector(elementos.formulario);
export const inputTags = document.querySelector(elementos.inputTags);
export const formularioListaTags = document.querySelector(elementos.formularioListaTags);
export const botaoExluirDadosFormulario = document.querySelector(elementos.botaoExluirDadosFormulario);
export const tagsDisponiveis = [
    "Front-end",
    "Programação",
    "Data Science",
    "Full-stack",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue",
    "Back-end",
];