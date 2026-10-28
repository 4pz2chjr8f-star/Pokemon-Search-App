export async function getData() {
  const URI = `https://pokeapi.co/api/v2/pokemon/`;

  const response = await fetch(URI + pokemonName);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const pokemon = response.json();

  return pokemon;
}
