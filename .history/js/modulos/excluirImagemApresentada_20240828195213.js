function excluirImagemApresentada() {

    const elementos = {
        imagem: '[data-js="imagem"]',
        descricaoDaImagem: '[data-js="descricao-da-imagem"]',
        inputUploadDeImagem: '[data-js="input-upload-imagem"]',
    }

    const imagem = document.querySelector(elementos.imagem);
    const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
    const inputUploadDeImagem = document.querySelector(elementos.inputUploadDeImagem);

    imagem.src = './img/imagem1.png';
    descricaoDaImagem.textContent = 'image__projeto.png';
    inputUploadDeImagem.value = ''
}

export default excluirImagemApresentada;