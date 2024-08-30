import { botaoExluirDadosFormulario, botaoUploadImagem, formulario, formularioListaTags, inputTags, inputUploadImagem } from "./modulos/variaveis.js";

import criarTagsDoProjeto from "./modulos/criarTagsDoProjeto.js";
import descartarDadosDoFormulario from "./modulos/descartarDadosDoFormulario.js";
import enviarDados from "./modulos/enviarDados.js";
import excluirTag from "./modulos/excluirTag.js";
import uploadDeImagem from "./modulos/uploadDeImagem.js";

botaoUploadImagem.addEventListener('click', () => {
    inputUploadImagem.click();
});
formularioListaTags.addEventListener('click', excluirTag);
inputUploadImagem.addEventListener('change', uploadDeImagem);
inputTags.addEventListener('keypress', criarTagsDoProjeto);
formulario.addEventListener('submit', enviarDados);
botaoExluirDadosFormulario.addEventListener('click', descartarDadosDoFormulario);

