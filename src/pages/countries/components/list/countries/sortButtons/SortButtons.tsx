import styles from "./SortButtons.module.css";

const SortButtons = ({handleSortButton}) => {
  return (
    <div className={styles.sortButtons}>
      <button
        className={styles.sortButton}
        onClick={() => handleSortButton("asc")}
      >
        asc
      </button>
      <button
        className={styles.sortButton}
        onClick={() => handleSortButton("desc")}
      >
        desc
      </button>
      <button
        className={styles.sortButton}
        onClick={() => handleSortButton("normal")}
      >
        normal
      </button>
    </div>
  );
};

export default SortButtons;
