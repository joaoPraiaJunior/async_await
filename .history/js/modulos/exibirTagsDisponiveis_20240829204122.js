import barraDeProgresso from "./barraDeProgresso.js";


let contador = 0;

function exibirTagsDisponiveis(tagTexto) {

    const tagsDisponiveis = [
        "Front-end",
        "Programação",
        "Data Science",
        "Full-stack",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Angular",
        "Vue",
        "Back-end",
    ];

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log(`Progresso: ${contador + 1 * 10}%`);
            resolve(tagsDisponiveis.find(tag => tagTexto.toLowerCase() === tag.toLowerCase()));
            barraDeProgresso(contador);
        }, 1000);

    });
}

export default exibirTagsDisponiveis;