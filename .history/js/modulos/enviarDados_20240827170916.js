import elementosQueResetamFormulario from './elementosQueResetamFormulario.js';
import manipularMensagemDeErro from './manipularMensagemDeErro.js';
import publicarDadosDoProjeto from './publicarDadosDoProjeto.js';

async function enviarDados(evento) {
    evento.preventDefault();
    const nomeDoProjeto = formulario.projeto.value;
    const descricaoDoProjeto = formulario.descricao.value;
    const tags = Array.from(formularioListaTags.children).map(tag => tag.querySelector('p').textContent);

    try {
        const mensagem = await publicarDadosDoProjeto(nomeDoProjeto, descricaoDoProjeto, tags);
        manipularMensagemDeErro(mensagem);
    } catch (erro) {
        console.error('Erro ao publicar projeto', erro);
        manipularMensagemDeErro('Erro ao publicar projeto');
    }

    elementosQueResetamFormulario();
}

export default enviarDados;