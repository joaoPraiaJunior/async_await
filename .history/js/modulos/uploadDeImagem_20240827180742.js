import lerConteudoDoArquivo from './lerConteudoDoArquivo.js';
import manipularMensagemDeErro from './manipularMensagemDeErro.js';
import { descricaoDaImagem, imagem } from './variaveis.js';

async function uploadDeImagem (evento) {

    const elementos = {
        imagem: '[data-js="imagem"]',
        descricaoDaImagem: '[data-js="descricao-da-imagem"]',
    }

    const arquivo = evento.target.files[0];

    if (!arquivo) {
        manipularMensagemDeErro('Nenhum arquivo selecionado.');
        return;
    } else {

        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo, evento);
            imagem.src = conteudoDoArquivo.url;
            descricaoDaImagem.textContent = conteudoDoArquivo.nome;

            manipularMensagemDeErro(null); // Limpa a mensagem

        } catch (erro) {

            manipularMensagemDeErro(erro); // Exibe o erro
        }

    }
}

export default uploadDeImagem;