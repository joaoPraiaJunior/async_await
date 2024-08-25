const elementos = {
    botaoUpaloadImagem: '[data-js="upload-de-imagem"]',
    inputUploadImagem: '[data-js="input-upload-imagem"]',
}

const botaoUpaloadImagem = document.querySelector(elementos.botaoUpaloadImagem);
const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);

botaoUpaloadImagem.addEventListener('click', () => {
    inputUploadImagem.click();
});

function validaImagem(evento) {
    const arquivo = evento.target.files[0];

    if (!validaExtensao(arquivo)) {
        alert('Extensão do arquivo inválida');
        evento.target.value = '';
        return;
    }

    if (!validaTamnhoDaImagem(arquivo)) {
        alert('Tamanho do arquivo inválido');
        evento.target.value = '';
        return;
    }
}

function validaExtensao(arquivo) {
    const extensoesPermitidas = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    return extensoesPermitidas.includes(arquivo.type);
}

function validaTamnhoDaImagem(arquivo) {
    const tamanhoPermitidoDoisMB = 1024 * 1024 * 2;
    return arquivo.size <= tamanhoPermitidoDoisMB;
}


inputUploadImagem.addEventListener('change', validaImagem);