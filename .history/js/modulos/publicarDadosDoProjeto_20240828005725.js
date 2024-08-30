import elementosQueResetamFormulario from './elementosQueResetamFormulario.js';
import validaDadosFormulario from './validaDadosFormulario.js';

async function publicarDadosDoProjeto(dados) {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const envio = Math.random() > 0.5;
            const erroDados = validaDadosFormulario(dados);

            if (erroDados) {
                return reject(erroDados);
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