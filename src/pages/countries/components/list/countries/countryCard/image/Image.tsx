import React from "react";
import styles from "./ImageStyles.module.css";

type Props = {
  flag: string;
  name: string;
};

const Image: React.FC<Props> = ({ flag, name }) => {
  return <img className={styles.countryFlag} src={flag} alt={`${name} flag`} />;
};

export default Image;
