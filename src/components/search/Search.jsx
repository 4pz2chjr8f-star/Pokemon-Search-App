import styles from "./Search.module.css";

export const Search = ({ pokemonName, setPokemonName, error, onSearch }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <input
          className={styles.input}
          type="text"
          value={pokemonName}
          placeholder="Choose Your Pokémon"
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </form>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
