import { url } from "inspector";
import { Dispatch, SetStateAction } from "react";
import styles from "../styles/Select.module.scss";

export const SelectShowcase = ({
  selectedShowcase,
  setSelectedShowcase,
}: {
  selectedShowcase: number;
  setSelectedShowcase: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <button
          className={`${styles.cardBox} ${styles.showcase} ${
            selectedShowcase === i ? styles.bordered : ""
          }`}
          key={i}
          onClick={() => setSelectedShowcase(i)}
        >
          {selectedShowcase === i && <div className={styles.selected}></div>}
          <img
            className={styles.cardImg}
            src={`/assets/showcases/thumbnail/showcase (${i + 1}).png`}
            alt="배경"
          />
        </button>
      ))}
    </>
  );
};
