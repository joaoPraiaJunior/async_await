import dadosNoLocalStorage from './dadosNoLocalStorage.js';
import validaDadosFormulario from './validaDadosFormulario.js';

async function publicarDadosDoProjeto(dados) {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const erroDados = validaDadosFormulario(dados);
            const envio = dadosNoLocalStorage(dados);

            if (erroDados) {
                return reject(erroDados);
            }

            if (envio) {
                resolve('Projeto publicado com sucesso');
                descartarDadosDoFormulario();
                
            } else {
                reject('Erro ao publicar projeto');
            }
        }, 2000);

    });
}

export default publicarDadosDoProjeto;