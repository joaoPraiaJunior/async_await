function excluirImagemApresentada(evento) {

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
    const botaoExcluir = evento.target.closest('[data-js="botao-excluir-imagem"]');

    if(botaoExcluir){
        imagem.src = './img/imagem1.png';
        descricaoDaImagem.innerHTML = '';
        inputUploadDeImagem.value = ''
        uploadDeImagem.focus();
    }
}

export default excluirImagemApresentada;