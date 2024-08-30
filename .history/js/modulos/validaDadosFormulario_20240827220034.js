import verificaListaDeTags from "./verificaListaDeTags.js";


function validaDadosFormulario(dados) {

    const {nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto} = dados;

    console.log(nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto);

    if(!validaInputs(nomeDoProjeto, descricaoDoProjeto)) {
        return 'Verifique se os campos Nome do Projeto e descrição estao preenchidos';
    }

    if(!verificaListaDeTags(tags)) {
        return 'Adicione pelo menos uma tag';
    }

    return null; // Sem erro
}

export default validaDadosFormulario;