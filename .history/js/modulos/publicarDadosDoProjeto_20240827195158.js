import verificaListaDeTags from './verificaListaDeTags.js';


async function publicarDadosDoProjeto(dados) {

    const { tags } = dados;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const envio = Math.random() > 0.5;
            const erroTags = verificaListaDeTags(tags);

            if (erroTags) {
                reject(erroTags);
                
            }

            if (envio) {
                resolve('Projeto publicado com sucesso');
            } else {
                reject('Erro ao publicar projeto');
            }
        }, 2000);

    });
}

export default publicarDadosDoProjeto;