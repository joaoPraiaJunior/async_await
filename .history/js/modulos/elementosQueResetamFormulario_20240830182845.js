
function elementosQueResetamFormulario() {

    const elementos = {
        imagem: '[data-js="imagem"]',
        descricaoDaImagem: '[data-js="descricao-da-imagem"]',
        formularioListaTags: '[data-js="formulario-lista-tags"]',
        formulario: '[data-js="formulario"]',
        inputUploadDeImagem: '[data-js="input-upload-imagem"]',
        contador: '[data-js="contador-de-caracteres"]',
    }

    const imagem = document.querySelector(elementos.imagem);
    const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
    const formulario = document.querySelector(elementos.formulario);
    const formularioListaTags = document.querySelector(elementos.formularioListaTags);
    const inputUploadDeImagem = document.querySelector(elementos.inputUploadDeImagem);
    const contador = document.querySelector(elementos.contador);
    const qtdDeCaracteres = contador.getAttribute('maxLength');

    console.log(qtdDeCaracteres);
    formulario.reset();
    imagem.src = './img/imagem1.png';
    descricaoDaImagem.innerHTML = '';
    formularioListaTags.innerHTML = '';
    inputUploadDeImagem.value = '';
    contador.textContent = qtdDeCaracteres;

}


export default elementosQueResetamFormulario;