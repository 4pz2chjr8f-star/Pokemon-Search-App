import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  const image =
    pokemon.sprites.other.dream_world.front_default ||
    pokemon.sprites.front_default;

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>
        {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}
      </h2>
      <img src={image} alt={pokemon.name} />
      {/* <p>Pókedex Number: # {pokemon.id}</p> */}
    </div>
  );
};
