import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./DetailsStyles.module.css";

const Details: React.FC<PropsWithChildren <{renderHeader: ReactNode}>> = ({renderHeader, children}) => {
  return (
    <div className={styles.countryDetiles}>
        {renderHeader}
        {children}
    </div>
  )
}

export default Details;