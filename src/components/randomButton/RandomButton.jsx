import { useState } from "react";
import { getData } from "../../services/pokemonData";
import styles from "./RandomButton.module.css";

export const RandomButton = ({ onRandomPokemon }) => {
  const [particles, setParticles] = useState([]);

  const burst = () => {
    const colors = [
      "#ff4d6d",
      "#ffd166",
      "#06d6a0",
      "#118ab2",
      "#c77dff",
      "#ff9f1c",
    ];

    const next = Array.from({ length: 16 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.3;
      const dist = 60 + Math.random() * 50;

      return {
        id: Date.now() + i,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist,
        rot: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    setParticles(next);
    setTimeout(() => setParticles([]), 950);
  };

  const handleRandomPokemon = async () => {
    burst();
    try {
      const randomId = Math.floor(Math.random() * 151) + 1;
      const data = await getData(String(randomId));
      onRandomPokemon(data);
    } catch (error) {
      console.error("Could not fetch a random Pókemon:", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleRandomPokemon}
        type="button"
        className={styles.randomButton}
      >
        I'm Feeling Lucky!
      </button>
      {particles.map((p) => (
        <span
          key={p.id}
          className={styles.confettiParticle}
          style={{
            "--tx": `${p.tx}px`,
            "--ty": `${p.ty}px`,
            "--rot": `${p.rot}deg`,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
};
