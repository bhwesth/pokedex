import { useEffect, useState } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  async function getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2");
    const data = await response.json();
    return data
    console.log(data);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      console.log(data);
      setPokemonData(data.results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData]);

  return (
    <div>
      {pokemonData.map((pokemon) => (
        <p>{pokemon.name}</p>
      ))}
    </div>
  );
}

export default App;
