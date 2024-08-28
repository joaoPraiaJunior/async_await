

function verificaListaDeTags(tags) {
    if(tags.length === 0 || !Array.isArray(tags)) {
        return false;
    } else {
        return true;
    }
}

export default verificaListaDeTags;