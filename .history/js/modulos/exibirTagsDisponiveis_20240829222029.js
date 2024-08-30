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

    barraDeProgresso(contador);

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(tagsDisponiveis.find(tag => tagTexto.toLowerCase() === tag.toLowerCase()));
        }, 1000);

    });
}

export default exibirTagsDisponiveis;