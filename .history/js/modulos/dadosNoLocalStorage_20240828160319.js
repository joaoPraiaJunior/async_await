async function dadosNoLocalStorage(dados) {

    const json = JSON.parse(localStorage.getItem('dados')) || [];

    const { nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto } = dados;

    const imagem = await lerConteudoDoArquivo(imagemDoProjeto.files[0]);
    const nomeDaImagem = imagem.name;
    const urlDaImagem = imagem.url;



    dadosDoProjeto = {
        nomeDoProjeto: nomeDoProjeto.value,
        descricaoDoProjeto: descricaoDoProjeto.value,
        tags: tags,
        urlDaImagem: urlDaImagem,
        nomeDaImagem: nomeDaImagem
    };
}

export default dadosNoLocalStorage;