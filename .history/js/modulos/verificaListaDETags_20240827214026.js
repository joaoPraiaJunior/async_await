

function verificaListaDeTags(tags) {
    return !tags.length || !Array.isArray(tags);
}

export default verificaListaDeTags;