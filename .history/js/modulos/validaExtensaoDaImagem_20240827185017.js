function validaExtensaoDaImagem(arquivo, evento) {

    const extensoesPermitidas = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    evento.target.value = '';
    return extensoesPermitidas.includes(arquivo.type);
}

export default validaExtensaoDaImagem;