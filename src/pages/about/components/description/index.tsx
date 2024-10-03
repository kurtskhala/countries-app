import styles from "./AboutDescriptionStyles.module.css";


const AboutDescription = () => {
  return (
    <section className={styles.appAboutSection}>
        <h1 className={styles.appAboutSectionTitle}>About Us</h1>
        <p className={styles.appAboutSectionParagraph}>
            Welcome to World Nations, a platform dedicated to providing essential information about countries worldwide. 
            Our goal is to make it easy for you to explore and compare key data on every country, including:
        </p>
        <ul className={styles.appAboutSectionList}>
            <li>Population</li>
            <li>Total Area</li>
            <li>Capital City</li>
            <li>National Flag</li>
        </ul>
        <p className={styles.appAboutSectionParagraph}>
            Whether you're a student, a traveler, or just someone interested in global facts, our simple and interactive cards give you 
            a quick overview of every nation. Dive into the world of countries and learn more about the amazing diversity our planet has to offer!
        </p>
    </section>
  )
}

export default AboutDescription