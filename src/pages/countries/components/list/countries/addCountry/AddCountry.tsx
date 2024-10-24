import { FormEvent, useState } from "react";
import styles from "./AddCountry.module.css";

type AddCountryProps = {
  onCountyCreate: (formData: any) => void;
};

const AddCountry: React.FC<AddCountryProps> = ({ onCountyCreate, content }) => {
  const [formData, setFormData] = useState({
    name: {
      en: "",
      ka: "",
    },
    capital: {
      en: "",
      ka: "",
    },
    population: {
      en: "",
      ka: "",
    },
    flag: "",
  });
  const [formDataError, setFormDataError] = useState({
    name: {
      en: false,
      ka: false,
    },
    capital: {
      en: false,
      ka: false,
    },
    population: {
      en: false,
      ka: false,
    },
    flag: false,
  });

  const validateForm = () => {
    const newErrors = {
      name: {
        en: formData.name["en"].length > 56,
        ka: formData.name["ka"].length > 56,
      },
      capital: {
        en: !formData.capital["en"].trim(),
        ka: !formData.capital["ka"].trim(),
      },
      population: {
        en: !formData.population["en"].toLowerCase().endsWith("million"),
        ka: !formData.population["ka"].toLowerCase().endsWith("მილიონი"),
      },
      flag: !formData.flag,
    };
  
    setFormDataError(newErrors);
  
    const hasErrors = Object.entries(newErrors).some(([key, value]) => {
      if (typeof value === 'boolean') {
        return value;
      }
      return Object.values(value).some(error => error);
    });
  
    return !hasErrors;
  };
  

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  const [field, language] = name.split("_");

  setFormData((prev) => ({
    ...prev,
    [field]: { ...prev[field], [language]: value },
  }));

  if (formDataError[field]?.[language]) {
    setFormDataError((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [language]: false,
      },
    }));
  }
};

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5242880) {
        setFormDataError((prev) => ({
          ...prev,
          flag: true,
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;

        setFormData((prev) => ({
          ...prev,
          flag: result,
        }));
        setFormDataError((prev) => ({
          ...prev,
          flag: false,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onCountyCreate(formData);
      setFormData({
        name: {
          en: "",
          ka: "",
        },
        capital: {
          en: "",
          ka: "",
        },
        population: {
          en: "",
          ka: "",
        },
        flag: "",
      });
    }
  };

  return (
    <form className={styles.addCountryForm} onSubmit={handleSubmit}>
      <div className={styles.addCountryFormGroupContainer}>
        <div className={styles.addCountryFormGroup}>
          <label htmlFor="name_en">Name:</label>
          <input
            type="text"
            id="name_en"
            name="name_en"
            value={formData.name["en"]}
            onChange={handleChange}
          />
          {formDataError.name["en"] && (
            <span className={styles.formError}>
              Country name must not exceed 56 characters
            </span>
          )}
        </div>
        <div className={styles.addCountryFormGroup}>
          <label htmlFor="name_ka">სახელი:</label>
          <input
            type="text"
            id="name_ka"
            name="name_ka"
            value={formData.name["ka"]}
            onChange={handleChange}
          />
          {formDataError.name["ka"] && (
            <span className={styles.formError}>
              ქვეყნის სახელი არ უნდა იყოს 56 ასოზე მეტი
            </span>
          )}
        </div>
      </div>
      <div className={styles.addCountryFormGroupContainer}>
        <div className={styles.addCountryFormGroup}>
          <label htmlFor="capital_en">Capital:</label>
          <input
            type="text"
            id="capital_en"
            name="capital_en"
            value={formData.capital["en"]}
            onChange={handleChange}
          />
          {formDataError.capital["en"] && (
            <span className={styles.formError}>
              Capital is required
            </span>
          )}
        </div>
        <div className={styles.addCountryFormGroup}>
          <label htmlFor="capital_ka">ქალაქი:</label>
          <input
            type="text"
            id="capital_ka"
            name="capital_ka"
            value={formData.capital["ka"]}
            onChange={handleChange}
          />
          {formDataError.capital["ka"] && (
            <span className={styles.formError}>
              ქალაქის შეყვანა აუცილებელია
            </span>
          )}
        </div>
      </div>
      <div className={styles.addCountryFormGroupContainer}>
        <div className={styles.addCountryFormGroup}>
          <label htmlFor="population_en">Population:</label>
          <input
            type="text"
            id="population_en"
            name="population_en"
            value={formData.population["en"]}
            onChange={handleChange}
          />
          {formDataError.population["en"] && (
            <span className={styles.formError}>
              Population must end with million
            </span>
          )}
        </div>
        <div className={styles.addCountryFormGroup}>
          <label htmlFor="population_ka">პოპულაცია:</label>
          <input
            type="text"
            id="population_ka"
            name="population_ka"
            value={formData.population["ka"]}
            onChange={handleChange}
          />
          {formDataError.population["ka"] && (
            <span className={styles.formError}>
              პოპულაცია უნდა მთავრდებოდეს million
            </span>
          )}
        </div>
      </div>
      <div className={styles.addCountryFormGroup}>
        <label htmlFor="flag">Flag/დროშა:</label>
        <input
          type="file"
          id="flag"
          name="flag"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
        {formDataError.flag && (
            <span className={styles.formError}>
              enter flag
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
