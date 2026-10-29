export async function getData(pokemonName) {
  const URI = `https://pokeapi.co/api/v2/pokemon/`;

  // console.log("Searching for:", JSON.stringify(pokemonName));

  const response = await fetch(URI + pokemonName.trim().toLowerCase());

  if (!response.ok) {
    throw new Error("Pokemon not found!");
  }
  const pokemon = await response.json();

  return pokemon;
}
