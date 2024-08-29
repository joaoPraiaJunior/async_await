function validaInputFile(imagemDoProjeto) {
    if(imagemDoProjeto.files.length === 0) {
        return false;
    }

    return true;
}

export default validaInputFile;