import { url } from "inspector";
import { type } from "os";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/Select.module.scss";

export const SelectBackground = ({
  selectedBackground,
  setSelectedBackground,
}: {
  selectedBackground: number;
  setSelectedBackground: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <button
          className={`${styles.cardBox} ${
            selectedBackground === i ? styles.bordered : ""
          }`}
          key={i}
          onClick={() => setSelectedBackground(i)}
        >
          {selectedBackground === i && <div className={styles.selected}></div>}
          <img
            className={styles.cardImg}
            src={`/assets/backgrounds/thumbnail/background (${i + 1}).jpg`}
            alt="배경"
          />
        </button>
      ))}
    </>
  );
};
