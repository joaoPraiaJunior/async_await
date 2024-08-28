import elementosQueResetamFormulario from './elementosQueResetamFormulario.js';
import verificaListaDeTags from './verificaListaDeTags.js';


async function publicarDadosDoProjeto(nomeDoProjeto, descricaoDoProjeto, tags, imagemDoProjeto) {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const envio = Math.random() > 0.5;
            const erroTags = verificaListaDeTags(tags);

            if (erroTags) {
                return reject(erroTags);
            }

            if (envio) {
                resolve('Projeto publicado com sucesso');
                elementosQueResetamFormulario();
            } else {
                reject('Erro ao publicar projeto');
            }
        }, 2000);

    });
}

export default publicarDadosDoProjeto;