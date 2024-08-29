import dadosNoLocalStorage from './dadosNoLocalStorage.js';
import elementosQueResetamFormulario from './elementosQueResetamFormulario.js';
import validaDadosFormulario from './validaDadosFormulario.js';

async function publicarDadosDoProjeto(dados) {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const erroDados = validaDadosFormulario(dados);

            if (erroDados) {
                return reject(erroDados);
            }

            const envio = dadosNoLocalStorage(dados);

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