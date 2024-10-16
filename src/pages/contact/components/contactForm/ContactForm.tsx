import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [formDataError, setFormDataError] = useState({
    name: false,
    surname: false,
    email: false,
    message: false,
  });

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      surname: !formData.surname.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({
        name: "",
        surname: "",
        email: "",
        message: "",
      });
    }
  };

  function handleKayDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "enter") {
      handleSubmit(e);
    }
  }

  return (
    <div className={styles.contactForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">სახელი:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formDataError.name && (
            <span>Name is required</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="surname">გვარი:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
          {formDataError.surname && (
            <span>Surname is required</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formDataError.email && (
            <span>Mail is required</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">შეტყობინება:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {formDataError.message && (
            <span>Message is required</span>
          )}
        </div>
        <button
          type="submit"
          onKeyDown={handleKayDown}
          className={styles.submitButton}
        >
          გაგზავნა
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
