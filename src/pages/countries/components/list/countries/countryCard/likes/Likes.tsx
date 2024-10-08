import heart from "@/assets/heart.png";
import styles from "./Likes.module.css";

const Likes :React.FC<{handleLikeButton: Function, likes:number}> = ({handleLikeButton, likes}) => {
  return (
    <div onClick={() => handleLikeButton()} className={styles.countyLike}>
        <span className={styles.countyLikeCount}>{likes}</span>
        <img className={styles.countryLikeIcon} alt="like icon" src={heart}/>
    </div>
  )
}

export default Likes