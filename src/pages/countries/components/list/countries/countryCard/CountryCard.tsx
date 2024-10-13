import styles from "./CountryCardStyles.module.css";

type Children = {
  children: React.ReactNode;
  active: boolean;
  id: string;
  onCountryDelete: any;
};

const CountryCard: React.FC<Children> = ({ children, active, id, onCountryDelete}) => {
  return (
    <div
      className={`${styles.appCountryCard} ${
        !active && styles.appCountryCardDeleted
      }`}
    >
      {!active && (
        <div className={styles.appCountryCardDeleteedContainer}>
          <span className={styles.appCountryCardDeleteedContainerText}>
            Deleted
          </span>
          <button onClick={() => onCountryDelete(id)} className={styles.appCountryCardDeleteedContainerButton}>
            activate
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default CountryCard;
