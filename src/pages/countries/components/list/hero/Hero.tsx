import styles from "./HeroStyles.module.css";

const Hero: React.FC = () => {
  return (
    <div className={styles.appHero}>
        <p className={styles.appHeroText}>This is site about countries</p>
    </div>
  )
}

export default Hero