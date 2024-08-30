import elementosQueResetamFormulario from './elementosQueResetamFormulario.js';

function descartarDadosDoFormulario(evento) {
    evento.preventDefault();
    elementosQueResetamFormulario();
}

export default descartarDadosDoFormulario;