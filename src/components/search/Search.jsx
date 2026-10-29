import styles from "./Search.module.css";

export const Search = ({ pokemonName, setPokemonName, error }) => {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={pokemonName}
        placeholder="Choose Your Pokémon"
        onChange={(e) => setPokemonName(e.target.value)}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
