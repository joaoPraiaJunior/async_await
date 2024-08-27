const elementos = {
    botaoUploadImagem: '[data-js="upload-de-imagem"]',
    inputUploadImagem: '[data-js="input-upload-imagem"]',
    imagem: '[data-js="imagem"]',
    descricaoDaImagem: '[data-js="descricao-da-imagem"]',
    mensagemDeErro: '[data-js="mensagem-de-erro"]'
}

const botaoUploadImagem = document.querySelector(elementos.botaoUploadImagem);
const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);
const imagem = document.querySelector(elementos.imagem);
const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
const mensagemDeErro = document.querySelector(elementos.mensagemDeErro);

botaoUploadImagem.addEventListener('click', () => {
    inputUploadImagem.click();
});

function validaImagem(arquivo, evento) {

    if (!validaExtensao(arquivo)) {
        evento.target.value = '';
        return 'Extensão não permitida. Por favor, envie uma imagem no formato JPEG, PNG, JPG ou GIF';
    }

    if (!validaTamanhoDaImagem(arquivo)) {
        evento.target.value = '';
        return 'Tamanho da imagem não permitido. Por favor, envie uma imagem de até 2MB';
    }

    return null; // Sem erro
 }

function validaExtensao(arquivo) {

    const extensoesPermitidas = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    return extensoesPermitidas.includes(arquivo.type);
}

function validaTamanhoDaImagem(arquivo) {

    const tamanhoPermitidoDoisMB = 1024 * 1024 * 2;
    return arquivo.size <= tamanhoPermitidoDoisMB;
}


function lerConteudoDoArquivo(arquivo, evento) {

    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {

            const erro = validaImagem(arquivo, evento)

            if(erro) {
                return reject(erro);
            }

            resolve({ url: leitor.result, nome: arquivo.name });
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo);
    });
}

function manipularMensagemDeErro(erro, mostrarMensagemDeErro) {

    if(mostrarMensagemDeErro) {
        mensagemDeErro.textContent = erro;
        mensagemDeErro.classList.add('piscar');
        mensagemDeErro.setAttribute('aria-hidden', false);
        mensagemDeErro.setAttribute('role', 'alert');
        mensagemDeErro.setAttribute('tabindex', 0); // Para que o leitor de tela leia a mensagem
    } else {
        mensagemDeErro.textContent = '';
        mensagemDeErro.classList.remove('piscar');
        mensagemDeErro.setAttribute('aria-hidden', true);
        mensagemDeErro.removeAttribute('role');
        mensagemDeErro.removeAttribute('tabindex');
    }
}

inputUploadImagem.addEventListener('change', async (evento) => {
    const arquivo = evento.target.files[0];
    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo, evento);
            imagem.src = conteudoDoArquivo.url;
            descricaoDaImagem.textContent = conteudoDoArquivo.nome;
            manipularMensagemDeErro('', false);

        } catch (erro) {
            manipularMensagemDeErro(erro, true);
        }
    }
});