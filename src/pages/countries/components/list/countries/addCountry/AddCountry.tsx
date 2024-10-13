import { FormEvent } from "react";
import styles from "./AddCountry.module.css";

type AddCountryProps = {
  onCountyCreate: (e: FormEvent<HTMLFormElement>) => void;
};

const AddCountry: React.FC<AddCountryProps> = ({ onCountyCreate }) => {
  return (
    <form className={styles.addCountryForm} onSubmit={onCountyCreate}>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="surname">Capital:</label>
        <input type="text" id="capital" name="capital" />
      </div>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="email">Population:</label>
        <input type="text" id="population" name="population" />
      </div>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="message">Flag:</label>
        <input type="text" id="flag" name="flag" />
      </div>
      <button type="submit" className={styles.addCountryFormsubmitButton}>
        Add Country
      </button>
    </form>
  );
};

export default AddCountry;
