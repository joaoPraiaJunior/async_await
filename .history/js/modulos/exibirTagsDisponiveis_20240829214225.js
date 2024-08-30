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

        const intervalo = setInterval(() => {
            resolve(tagsDisponiveis.find(tag => tagTexto.toLowerCase() === tag.toLowerCase()));
            barraDeProgresso(contador, intervalo);
        }, 10000);

    });
}

export default exibirTagsDisponiveis;