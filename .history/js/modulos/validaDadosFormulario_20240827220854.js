import validaInputs from "./validaInputs.js";
import validaInputsFiles from "./validaInputsFiles.js";
import verificaListaDeTags from "./verificaListaDeTags.js";


function validaDadosFormulario(dados) {

    const {nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto} = dados;

    console.log(nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto);

    if(!validaInputsFiles(imagemDoProjeto)) {
        return 'Adicione uma imagem ao projeto';
    }

    if(!validaInputs(nomeDoProjeto, descricaoDoProjeto)) {
        return 'Verifique se os campos Nome do Projeto e Descrição estao preenchidos';
    }

    if(!verificaListaDeTags(tags)) {
        return 'Adicione pelo menos uma tag';
    }

    return null; // Sem erro
}

export default validaDadosFormulario;