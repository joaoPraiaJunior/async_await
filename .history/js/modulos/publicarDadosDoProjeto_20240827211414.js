import elementosQueResetamFormulario from './elementosQueResetamFormulario.js';


async function publicarDadosDoProjeto(dados) {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const envio = Math.random() > 0.5;
            const erroTags = validaDadosFormulario(dados);

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