function fetchData(url, setPokemons, setIsFetched = () => {}) {
  setIsFetched(false);
  fetch(url)
    .then((res) => res.json())
    .then((data) => setPokemons(data))
    .then(() => setIsFetched(true))
    .catch((e) => {
      console.error(e);
    });
}

export { fetchData };
