import verificaListaDeTags from "./verificaListaDeTags";


function validaDadosFormulario(dados) {

    const {nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto} = dados;

    if(!verificaListaDeTags(tags)) {
        return 'Adicione pelo menos uma tag';
    }

    return null; // Sem erro
}