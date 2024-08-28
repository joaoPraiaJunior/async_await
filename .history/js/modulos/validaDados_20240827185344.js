import validaExtensaoDaImagem from './validaExtensaoDaImagem.js';
import validaTamanhoDaImagem from './validaTamanhoDaImagem.js';
import verificaListaDeTags from './verificaListaDeTags.js';

function validaDados(arquivo, evento) {

    if (!validaExtensaoDaImagem(arquivo , evento)) {
        return 'Extensão não permitida. Por favor, envie uma imagem no formato JPEG, PNG, JPG ou GIF';
    }

    if (!validaTamanhoDaImagem(arquivo, evento)) {
        return 'Tamanho da imagem não permitido. Por favor, envie uma imagem de até 2MB';
    }

    if(!verificaListaDeTags(arquivo)) {
        return 'Adicione pelo menos uma tag ao projeto';
    }

    return null; // Sem erro
}

export default validaDados;