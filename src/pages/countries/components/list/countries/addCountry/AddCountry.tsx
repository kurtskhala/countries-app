import { FormEvent, useState } from "react";
import styles from "./AddCountry.module.css";

type AddCountryProps = {
  onCountyCreate: (formData: any) => void;
};

const AddCountry: React.FC<AddCountryProps> = ({ onCountyCreate, content }) => {
  const [formData, setFormData] = useState({
    name: "",
    capital: "",
    population: "",
    flag: "",
  });
  const [formDataError, setFormDataError] = useState({
    name: false,
    capital: false,
    population: false,
    flag: false,
  });

  const validateForm = () => {
    const newErrors = {
      name: formData.name.length > 56,
      capital: !formData.capital.trim(),
      population: !formData.population.toLowerCase().endsWith("million"),
      flag: !/^https?:\/\/.+\.(jpg|jpeg|png|gif|svg)$/i.test(formData.flag),
    };

    setFormDataError(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formDataError[name]) {
      setFormDataError((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      onCountyCreate(formData);
      setFormData({
        name: "",
        capital: "",
        population: "",
        flag: "",
      });
    }
  };

  return (
    <form className={styles.addCountryForm} onSubmit={handleSubmit}>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="name">{content.form.name}:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formDataError.name && (
          <span className={styles.formError}>
            {content.formError.name}
          </span>
        )}
      </div>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="surname">{content.form.capital}:</label>
        <input
          type="text"
          id="capital"
          name="capital"
          value={formData.capital}
          onChange={handleChange}
        />
        {formDataError.capital && (
          <span className={styles.formError}>{content.formError.capital}</span>
        )}
      </div>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="email">{content.form.population}:</label>
        <input
          type="text"
          id="population"
          name="population"
          value={formData.population}
          onChange={handleChange}
        />
        {formDataError.population && (
          <span className={styles.formError}>
            {content.formError.population}
          </span>
        )}
      </div>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="message">{content.form.flag}:</label>
        <input
          type="text"
          id="flag"
          name="flag"
          value={formData.flag}
          onChange={handleChange}
        />
        {formDataError.flag && (
          <span className={styles.formError}>
            {content.formError.flag}
          </span>
        )}
      </div>
      <button type="submit" className={styles.addCountryFormsubmitButton}>
        {content.form.button}
      </button>
    </form>
  );
};

export default AddCountry;
