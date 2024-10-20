import styles from "./HeroStyles.module.css";

const Hero: React.FC = ({content}) => {
  return (
    <div className={styles.appHero}>
        <p className={styles.appHeroText}>{content.main}</p>
    </div>
  )
}

export default Hero