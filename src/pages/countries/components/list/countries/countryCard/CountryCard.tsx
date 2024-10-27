import { Countries } from "@/language/language";
import styles from "./CountryCardStyles.module.css";

type Children = {
  content: Countries;
  children: React.ReactNode;
  active: boolean;
  id: string;
  onCountryDelete: (arg: string) => void;
};

const CountryCard: React.FC<Children> = ({
  content,
  children,
  active,
  id,
  onCountryDelete,
}) => {
  return (
    <div
      className={`${styles.appCountryCard} ${
        !active && styles.appCountryCardDeleted
      }`}
    >
      {!active && (
        <div className={styles.appCountryCardDeleteedContainer}>
          <span className={styles.appCountryCardDeleteedContainerText}>
            {content.list.deleted}
          </span>
          <button
            onClick={() => onCountryDelete(id)}
            className={styles.appCountryCardDeleteedContainerButton}
          >
            {content.list.activate}
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default CountryCard;
