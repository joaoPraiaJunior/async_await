import barraDeProgresso from "./barraDeProgresso.js";

function exibirTagsDisponiveis(tagTexto) {

    let contador = 0;

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
            resolve(tagsDisponiveis.find(tag => tagTexto.toLowerCase() === tag.toLowerCase()));
            barraDeProgresso(contador++);
        }, 1000);

    });
}

export default exibirTagsDisponiveis;