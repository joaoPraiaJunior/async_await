function excluirImagemApresentada() {

    const elementos = {
        imagem: '[data-js="imagem"]',
        descricaoDaImagem: '[data-js="descricao-da-imagem"]',
        inputUploadDeImagem: '[data-js="input-upload-imagem"]',
        uploadDeImagem: '[data-js="upload-de-imagem"]',
    }

    const imagem = document.querySelector(elementos.imagem);
    const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
    const inputUploadDeImagem = document.querySelector(elementos.inputUploadDeImagem);
    const uploadDeImagem = document.querySelector(elementos.uploadDeImagem);
    const confirmar = confirm('Deseja realmente excluir a imagem?');

    if(confirmar){
        imagem.src = './img/imagem1.png';
        descricaoDaImagem.textContent = 'image__projeto.png';
        inputUploadDeImagem.value = ''
        upuploadDeImagem.focus();
    }
}

export default excluirImagemApresentada;