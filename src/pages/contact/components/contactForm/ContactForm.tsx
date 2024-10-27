import { useState } from "react";
import styles from "./ContactForm.module.css";
import { Contact as ContactTypes } from "@/language/language";
import React from 'react';

interface FormDataError {
  name: boolean;
  surname: boolean;
  email: boolean;
  message: boolean;
  [key: string]: boolean;
}

const ContactForm: React.FC<{content: ContactTypes}> = ({ content }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [formDataError, setFormDataError] = useState<FormDataError>({
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

  function handleKayDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <div className={styles.contactForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">{content.form.name}:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formDataError.name && <span>{content.formError.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="surname">{content.form.surname}:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
          {formDataError.surname && <span>{content.formError.surname}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">{content.form.mail}:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formDataError.email && <span>{content.formError.mail}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">{content.form.message}:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {formDataError.message && <span>{content.formError.message}</span>}
        </div>
        <button
          type="submit"
          onKeyDown={handleKayDown}
          className={styles.submitButton}
        >
          {content.form.submit}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
