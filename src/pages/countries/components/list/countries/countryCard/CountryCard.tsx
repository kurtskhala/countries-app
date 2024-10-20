import styles from "./CountryCardStyles.module.css";

type Children = {
  children: React.ReactNode;
  active: boolean;
  id: string;
  onCountryDelete: any;
};

const CountryCard: React.FC<Children> = ({content, children, active, id, onCountryDelete}) => {
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
          <button onClick={() => onCountryDelete(id)} className={styles.appCountryCardDeleteedContainerButton}>
            {content.list.activate}
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default CountryCard;
