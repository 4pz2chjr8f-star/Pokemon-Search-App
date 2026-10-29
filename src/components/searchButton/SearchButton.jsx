import styles from "./SearchButton.module.css";

export const SearchButton = ({ onSearch }) => {
  return (
    <button className={styles.btnGrad} type="button" onClick={onSearch}>
      Search
    </button>
  );
};
