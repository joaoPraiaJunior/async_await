
function validaDadosFormulario(dados) {

    const {nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto} = dados;

    if(!verificaListaDETags(tags)) {
        return 'Adicione pelo menos uma tag';
    }

    return null; // Sem erro
}