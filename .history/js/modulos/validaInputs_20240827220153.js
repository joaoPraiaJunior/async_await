function validaInputs(nomeDoProjeto, descricaoDoProjeto) {

    if(!nomeDoProjeto.value || !descricaoDoProjeto.value) {
        return false;
    }

    return true;

}
export default validaInputs;