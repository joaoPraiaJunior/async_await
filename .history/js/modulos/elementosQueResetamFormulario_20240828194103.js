
function elementosQueResetamFormulario() {

    const elementos = {
        imagem: '[data-js="imagem"]',
        descricaoDaImagem: '[data-js="descricao-da-imagem"]',
        formularioListaTags: '[data-js="formulario-lista-tags"]',
        formulario: '[data-js="formulario"]',
        inputUploadDeImagem: '[data-js="upload-de-imagem"]',
    }

    const imagem = document.querySelector(elementos.imagem);
    const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
    const formulario = document.querySelector(elementos.formulario);
    const formularioListaTags = document.querySelector(elementos.formularioListaTags);
    const inputUploadDeImagem = document.querySelector(elementos.uploadDeImagem);


    formulario.reset();
    imagem.src = './img/imagem1.png';
    descricaoDaImagem.textContent = 'image__projeto.png';
    formularioListaTags.innerHTML = '';
    inputUploadDeImagem.value = '';
}


export default elementosQueResetamFormulario;