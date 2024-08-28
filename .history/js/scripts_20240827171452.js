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

const botaoUploadImagem = document.querySelector(elementos.botaoUploadImagem);
const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);
const imagem = document.querySelector(elementos.imagem);
const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
const mensagemDeErro = document.querySelector(elementos.mensagemDeErro);
const formulario = document.querySelector(elementos.formulario);
const botaoExluirDadosFormulario = document.querySelector(elementos.botaoExluirDadosFormulario);
const tagsDisponiveis = [
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

botaoUploadImagem.addEventListener('click', () => {
    inputUploadImagem.click();
});














formularioListaTags.addEventListener('click', excluirTag);



inputUploadImagem.addEventListener('change', uploadDEImagem);





inputTags.addEventListener('keypress', criarTagsDoProjeto);






formulario.addEventListener('submit', enviarDados);




botaoExluirDadosFormulario.addEventListener('click', descartarDadosDoFormulario);

