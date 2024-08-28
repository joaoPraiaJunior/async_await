import validaExtensaoDaImagem from './validaExtensaoDaImagem.js';
import validaTamanhoDaImagem from './validaTamanhoDaImagem.js';

function validaImagem(arquivo, evento) {

    if (!validaExtensaoDaImagem(arquivo , evento)) {
        evento.target.value = '';
        return 'Extensão não permitida. Por favor, envie uma imagem no formato JPEG, PNG, JPG ou GIF';
    }

    if (!validaTamanhoDaImagem(arquivo, evento)) {
        evento.target.value = '';
        return 'Tamanho da imagem não permitido. Por favor, envie uma imagem de até 2MB';
    }

    return null; // Sem erro
}

export default validaImagem;