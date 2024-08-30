function exibirTagsDisponiveis(tagTexto) {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(tagsDisponiveis.find(tag => tagTexto.toLowerCase() === tag.toLowerCase()));
        }, 1000);

    });
}

export default exibirTagsDisponiveis;