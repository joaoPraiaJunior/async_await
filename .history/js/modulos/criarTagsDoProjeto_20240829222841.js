import exibirTagsDisponiveis from './exibirTagsDisponiveis.js';
import manipularMensagemDeErro from './manipularMensagemDeErro.js';

let contador = 0;
async function criarTagsDoProjeto(evento) {

    const elementos = {
        inputTags: '[data-js="input-tags"]',
        formularioListaTags: '[data-js="formulario-lista-tags"]',
    }
    
    const inputTags = document.querySelector(elementos.inputTags);
    const formularioListaTags = document.querySelector(elementos.formularioListaTags);
    const tecla = evento.key;

    if (tecla === 'Enter') {
        evento.preventDefault();
        const nomeDaTag = evento.target.value.trim();
        if (nomeDaTag !== '') {
            try {
                const tagJaExiste = await exibirTagsDisponiveis(nomeDaTag);
                if (tagJaExiste) {
                    barraDeProgresso(contador);
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    const botao = document.createElement('button');
                    li.classList.add('c-formulario__lista-tags');
                    botao.classList.add('c-botao', 'c-botao--excluir');
                    botao.setAttribute('aria-label', 'Excluir tag');
                    botao.setAttribute('type', 'button');
                    botao.dataset.js = 'botao-excluir-tag';
                    p.textContent = tagJaExiste;
                    li.appendChild(p);
                    li.appendChild(botao);
                    formularioListaTags.appendChild(li);
                    inputTags.value = '';
                } else {
                    manipularMensagemDeErro('Tag não encontrada');
                    inputTags.value = '';
                }
            } catch (erro) {
                manipularMensagemDeErro('Erro ao criar tag', erro);
            }
        }
    }
}

export default criarTagsDoProjeto;