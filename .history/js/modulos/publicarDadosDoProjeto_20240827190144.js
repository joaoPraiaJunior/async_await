import elementosQueResetamFormulario from './elementosQueResetamFormulario.js';
import validaDados from './validaDados.js';

async function publicarDadosDoProjeto(nomeDoProjeto, descricaoDoProjeto, tags) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const envio = Math.random() > 0.5;
            const erroTags = validaDados(tags);

            if (erroTags) {
                reject(erroTags);
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