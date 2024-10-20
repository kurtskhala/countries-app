import styles from "./AboutDescriptionStyles.module.css";

const AboutDescription = ({ content }) => {
  return (
    <section className={styles.appAboutSection}>
      <h1 className={styles.appAboutSectionTitle}>{content.header}</h1>
      <p className={styles.appAboutSectionParagraph}>{content.firstParag}</p>
      <ul className={styles.appAboutSectionList}>
        {content.unordList.map((li,i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
      <p className={styles.appAboutSectionParagraph}>{content.secondParag}</p>
    </section>
  );
};

export default AboutDescription;
