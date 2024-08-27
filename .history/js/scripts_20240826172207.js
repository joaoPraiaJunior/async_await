const elementos = {
    botaoUploadImagem: '[data-js="upload-de-imagem"]',
    inputUploadImagem: '[data-js="input-upload-imagem"]',
    imagem: '[data-js="imagem"]',
    descricaoDaImagem: '[data-js="descricao-da-imagem"]',
    mensagemDeErro: '[data-js="mensagem-de-erro"]',
    inputTags: '[data-js="input-tags"]',
    formularioListaTags: '[data-js="formulario-lista-tags"]',
}

const botaoUploadImagem = document.querySelector(elementos.botaoUploadImagem);
const inputUploadImagem = document.querySelector(elementos.inputUploadImagem);
const imagem = document.querySelector(elementos.imagem);
const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
const mensagemDeErro = document.querySelector(elementos.mensagemDeErro);
const inputTags = document.querySelector(elementos.inputTags);
const formularioListaTags = document.querySelector(elementos.formularioListaTags);

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

            if (erro) {
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

function manipularMensagemDeErro(erro) {

    if (erro) {
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


function criarTagsDaImagem(evento) {

    const tecla = evento.key;

    if(tecla === 'Enter') {
        evento.preventDefault();
        const nomeDaTag = evento.target.value.trim();
        if(nomeDaTag) {
            const li = document.createElement('li');
            const p = document.createElement('p');
            const img = document.createElement('img');
            li.classList.add('c-formulario__lista-tags');
            img.setAttribute('aria-label', 'Excluir tag');
            img.setAttribute('src', './img/close-black.svg');
            img.setAttribute('alt', '');
            img.setAttribute('role', 'button');
            p.textContent = nomeDaTag;
            li.appendChild(p);
            li.appendChild(img);
            formularioListaTags.appendChild(li);
            nomeDaTag.value = '';
        }
    }
}


inputTags.addEventListener('keypress', criarTagsDaImagem);

function debounce(funcao, tempoEspera) {
    let identificadorTimeout;
    return function (...args) {
        if (identificadorTimeout) clearTimeout(identificadorTimeout);
        identificadorTimeout = setTimeout(() => funcao.apply(this, args), tempoEspera);
    };
}

inputUploadImagem.addEventListener('change', (evento) => {
    const arquivo = evento.target.files[0];

    if (!arquivo) {
        manipularMensagemDeErro('Nenhum arquivo selecionado.');
        return;
    }

    debounce(async () => {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo, evento);
            imagem.src = conteudoDoArquivo.url;
            descricaoDaImagem.textContent = conteudoDoArquivo.nome;

            manipularMensagemDeErro(null); // Limpa a mensagem

        } catch (erro) {

            manipularMensagemDeErro(erro); // Exibe o erro
        }
    }, 300)();
});