import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev,[name] : value}))
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    function handleKayDown(e : KeyboardEvent<HTMLInputElement>) {
        if(e.key === "enter") {
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
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">შეტყობინება:</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" onKeyDown={handleKayDown} className={styles.submitButton}>
                    გაგზავნა
                </button>
            </form>
        </div>
    )
}

export default ContactForm