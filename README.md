# Pokémon Search App

A Pokémon search application built with **React** and **Vite**. Search for Pokémon from the original Pokédex (Generation I), view their details and stats, or discover a random Pokémon with the “I'm Feeling Lucky!” button.

## Features

- **Search Pokémon:** Search by Pokémon name or ID.
- **Pokémon details:** View the Pokémon's name, ID, image, types, and base stats.
- **Original Pokédex only:** Searches are limited to the first 151 Pokémon.
- **Random Pokémon:** Generate a random Pokémon with an animated confetti effect.
- **Error handling:** Displays a message when a Pokémon cannot be found or is outside the original Pokédex.
- **Dynamic styling:** Pokémon card backgrounds and stat bars adapt to the Pokémon's primary type.

## Built With

- [React](https://react.dev/) – UI library
- [Vite](https://vite.dev/) – Development server and build tool
- [PokéAPI](https://pokeapi.co/) – Pokémon data
- CSS Modules – Component-specific styling
- CSS – Layout, gradients, transitions, and animations

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/4pz2chjr8f-star/Pokemon-Search-App.git
   ```

2. Navigate into the project folder:

   ```bash
   cd pokedex-react
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal to view the application.

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Builds the application for production |
| `npm run preview` | Previews the production build         |
| `npm run lint`    | Runs Oxlint to check the code         |

## API

This project uses the **PokéAPI** to retrieve Pokémon information.

API endpoint:

```text
https://pokeapi.co/api/v2/pokemon/{name-or-id}
```

The application fetches Pokémon data using the entered name or ID. It also uses randomly generated IDs between 1 and 151 for the random Pokémon feature.

No API key is required.

## Design & Styling

The interface features a Pokémon-inspired red color palette, a centered layout, rounded containers, gradient buttons, and hover transitions.

The Pokémon card displays:

- Pokémon artwork
- Pokémon name and Pokédex ID
- Type badges
- Base stats with progress bars
- A background gradient based on the Pokémon's primary type

The random Pokémon button also includes a small confetti animation to make discovering Pokémon more fun.

## Future Improvements

- Add responsive layouts for mobile and tablet screens.
- Add Pokémon search suggestions.
- Include more generations of Pokémon.
- Add filters by Pokémon type.
- Improve loading feedback while fetching Pokémon data.

## Acknowledgements

- [PokéAPI](https://pokeapi.co/) for providing Pokémon data.
- [Pokémon](https://www.pokemon.com/) for the inspiration behind the project.

---

**Made with React and a love for Pokémon!**
