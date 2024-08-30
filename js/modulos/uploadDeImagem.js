import descricaoDaImagemEscolhida from './descricaoDaImagemEscolhida.js';
import lerConteudoDoArquivo from './lerConteudoDoArquivo.js';
import manipularMensagemDeErro from './manipularMensagemDeErro.js';

async function uploadDeImagem(evento) {

    const elementos = {
        imagem: '[data-js="imagem"]',
        descricaoDaImagem: '[data-js="descricao-da-imagem"]',
    }

    const imagem = document.querySelector(elementos.imagem);
    const descricaoDaImagem = document.querySelector(elementos.descricaoDaImagem);
    const arquivo = evento.target.files[0];

    if (!arquivo) {
        
        manipularMensagemDeErro('Nenhum arquivo selecionado.');
        return;

    } else {

        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagem.src = conteudoDoArquivo.url;
            descricaoDaImagem.innerHTML = descricaoDaImagemEscolhida(arquivo.name);
            manipularMensagemDeErro(null); // Limpa a mensagem

        } catch (erro) {

            manipularMensagemDeErro(erro); // Exibe o erro
        }

    }
}

export default uploadDeImagem;