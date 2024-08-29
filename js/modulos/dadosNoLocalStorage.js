import elementosQueResetamFormulario from './elementosQueResetamFormulario.js';
import lerConteudoDoArquivo from './lerConteudoDoArquivo.js';

async function dadosNoLocalStorage(dados) {

    const projetoNoLOcalStorage = JSON.parse(localStorage.getItem('Projeto')) || [];

    const { nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto } = dados;

    

    const imagem = await lerConteudoDoArquivo(imagemDoProjeto.files[0]);
    const nomeDaImagem = imagem.nome;
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

    elementosQueResetamFormulario();
}

export default dadosNoLocalStorage;