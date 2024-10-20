import styles from "./SortButtons.module.css";

const SortButtons = ({handleSortButton, content}) => {
  return (
    <div className={styles.sortButtons}>
      <button
        className={styles.sortButton}
        onClick={() => handleSortButton("asc")}
      >
        {content.sort[0]}
      </button>
      <button
        className={styles.sortButton}
        onClick={() => handleSortButton("desc")}
      >
        {content.sort[1]}
      </button>
      <button
        className={styles.sortButton}
        onClick={() => handleSortButton("normal")}
      >
        {content.sort[2]}
      </button>
    </div>
  );
};

export default SortButtons;
