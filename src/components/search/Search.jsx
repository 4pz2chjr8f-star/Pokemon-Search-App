import { useState } from "react";
import { getData } from "../../services/pokemonData";

export const Search = () => {
  const [pokemonName, setpokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setPokemon(null);

    try {
      const data = await getData(pokemonName);
      if (data.id <= 151) {
        setPokemon(data);
      } else {
        setError("Please search only the original Pókemons!");
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          value={pokemonName}
          placeholder="Choose Your Pókemon"
          onChange={(e) => setpokemonName(e.target.value)}
        />
        <button type="submit">Search</button>

        {error && <p>{error}</p>}

        {pokemon && (
          <div>
            <h2>{pokemon.name}</h2>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            />
          </div>
        )}
      </form>
    </div>
  );
};
