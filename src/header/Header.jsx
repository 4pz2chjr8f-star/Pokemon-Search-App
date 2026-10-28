import pokemonLogo from "../assets/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={pokemonLogo} alt="Pokemon Logo" />
    </header>
  );
};
