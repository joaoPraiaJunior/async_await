async function dadosNoLocalStorage() {
  const dados = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await dados.json();
  localStorage.setItem('dados', JSON.stringify(json));
}

export default dadosNoLocalStorage;