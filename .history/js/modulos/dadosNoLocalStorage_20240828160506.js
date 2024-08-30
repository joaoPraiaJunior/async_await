async function dadosNoLocalStorage(dados) {

    const projetoNoLOcalStorage = JSON.parse(localStorage.getItem('Projeto')) || [];

    const { nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto } = dados;

    const imagem = await lerConteudoDoArquivo(imagemDoProjeto.files[0]);
    const nomeDaImagem = imagem.name;
    const urlDaImagem = imagem.url;

    const dadosDoProjeto = {
        nomeDoProjeto: nomeDoProjeto.value,
        descricaoDoProjeto: descricaoDoProjeto.value,
        tags: tags,
        urlDaImagem: urlDaImagem,
        nomeDaImagem: nomeDaImagem
    };

    projetoNoLOcalStorage.push(dadosDoProjeto);

    localStorage.setItem('Projeto', JSON.stringify(projetoNoLOcalStorage));
}

export default dadosNoLocalStorage;