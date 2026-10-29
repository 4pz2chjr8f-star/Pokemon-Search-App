import { useState } from "react";
import styles from "./RandomButton.module.css";

export const RandomButton = ({ children }) => {
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

  return (
    <div style={{ position: "relative" }}>
      <button onClick={burst} className={styles.randomButton}>
        Random Pokémon
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
