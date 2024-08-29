
import validaImagem from './validaImagem.js';

function lerConteudoDoArquivo(arquivo, evento) {

    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {

            const erro = validaImagem(arquivo)

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

export default lerConteudoDoArquivo;