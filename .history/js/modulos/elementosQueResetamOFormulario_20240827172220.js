import { descricaoDaImagem, formulario, formularioListaTags, imagem } from 'variaveis.js';

function elementosQueResetamFormulario() {
    formulario.reset();
    imagem.src = './img/imagem1.png';
    descricaoDaImagem.textContent = 'image__projeto.png';
    formularioListaTags.innerHTML = '';
}


export default elementosQueResetamFormulario;