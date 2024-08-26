const elementos = {
    botaoUpaloadImagem: '[data-js="upload-de-imagem"]',
    inputUploadImagem: '[data-js="input-upload-imagem"]',
}

const botaoUpaloadImagem = document.querySelector(elementos.botaoUpaloadImagem);
const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);

botaoUpaloadImagem.addEventListener('click', () => {
    inputUploadImagem.click();
});

function validaImagem(arquivo) {

    if (!validaExtensao(arquivo)) {

        alert('Você deve enviar uma imagem válida');

        return;
    }

    if (!validaTamnhoDaImagem(arquivo)) {

        alert('Imagem muito grande. O tamanho máximo permitido é de 2MB');
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


function lerConteudoDoArquivo(arquivo) {

    return new Promisse((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name });
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo);
    });

}

inputUploadImagem.addEventListener('change', function (evento) {
    const arquivo = evento.target.files[0];
    validaImagem(arquivo, evento);
    lerConteudoDoArquivo(arquivo);
});