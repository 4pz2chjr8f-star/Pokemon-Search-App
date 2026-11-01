import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  const image =
    pokemon.sprites.other.dream_world.front_default ||
    pokemon.sprites.front_default;

  const types = pokemon.types;

  const TYPE_COLORS = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };

  const mainType = types[0].type.name;

  const stats = pokemon.stats;
  console.log(stats);

  const STATS_MAP = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    ["special-attack"]: "SATK",
    ["special-defense"]: "SDEF",
    speed: "SPD",
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 0%, ${TYPE_COLORS[mainType]} 40%, #ffffff 40%)`,
      }}
    >
      <div className={styles.nameIdContainer}>
        <h2 className={styles.h2Name}>
          {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}
        </h2>
        <p className={styles.id}># {pokemon.id}</p>
      </div>
      <img src={image} alt={pokemon.name} className={styles.img} />
      <div className={styles.pokemonTypeContainer}>
        {types.map((type) => (
          <p
            className={styles.pokemonType}
            key={type.type.name}
            style={{ backgroundColor: TYPE_COLORS[mainType] }}
          >
            {type.type.name}
          </p>
        ))}
      </div>
      <div className={styles.statsContainer}>
        {stats.map((stat) => (
          <p key={stat.stat.name} className={styles.pStatsContainer}>
            {STATS_MAP[stat.stat.name] + " :"}{" "}
            <progress
              value={stat["base_stat"]}
              max={120}
              className={styles.progress}
              style={{ "--progress-color": TYPE_COLORS[mainType] }}
            ></progress>
          </p>
        ))}
      </div>
    </div>
  );
};
