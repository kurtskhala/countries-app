import { Countries } from "@/language/language";
import styles from "./SortButtons.module.css";

type SortType = "asc" | "desc" | "default";

interface SortButtonsProps {
  handleSortButton: (sortType: SortType) => void;
  content: Countries;
}

const SortButtons: React.FC<SortButtonsProps> = ({
  handleSortButton,
  content,
}) => {
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
        onClick={() => handleSortButton("default")}
      >
        {content.sort[2]}
      </button>
    </div>
  );
};

export default SortButtons;
