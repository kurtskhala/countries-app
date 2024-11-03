import { useState } from "react";
import { Countries } from "@/language/language";
import EditCountry from "../editCountry";
import styles from "./CountryCardStyles.module.css";
import { Country } from "../reducer/state";

type Children = {
  onEdit: (updatedData: Country, id: string) => void;
  country: Country;
  content: Countries;
  children: React.ReactNode;
};

const CountryCard: React.FC<Children> = ({
  onEdit,
  country,
  content,
  children,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`${styles.appCountryCard}`}>
      <button
        className={styles.coutryEdit}
        onClick={() => setIsEditing((prev) => !prev)}
      >
        edit
      </button>
      {children}
      {isEditing && (
        <EditCountry
          onEdit={onEdit}
          setIsEditing={setIsEditing}
          country={country}
          content={content}
        />
      )}
    </div>
  );
};

export default CountryCard;
