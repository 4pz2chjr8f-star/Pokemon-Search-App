import { useState } from "react";
import { getData } from "./services/pokemonData";

import { Header } from "./components/header/Header";
import { PokemonCard } from "./components/pokemonCard/PokemonCard";
import { RandomButton } from "./components/randomButton/RandomButton";
import { Search } from "./components/search/Search";
import { SearchButton } from "./components/searchButton/SearchButton";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");

    try {
      const data = await getData(pokemonName);

      if (data.id <= 151) {
        setPokemon(data);
      } else {
        setError("Please search only the original Pokémon!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header />

      <div className="container">
        <Search
          pokemonName={pokemonName}
          setPokemonName={setPokemonName}
          error={error}
        />

        <div className="btn-wrapper">
          <SearchButton onSearch={handleSearch} />
          <RandomButton
            onRandomPokemon={(data) => {
              setError("");
              setPokemon(data);
            }}
          />
        </div>

        <PokemonCard pokemon={pokemon} />
      </div>
    </>
  );
}

export default App;
