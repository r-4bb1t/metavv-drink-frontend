import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import styles from "../styles/ProgressBar.module.scss";

export const ProgressBar = ({ page }: { page: String }) => {
  const progressBar = [
    { name: "재료 선택", page: "ingredient" },
    { name: "술잔 선택", page: "glass" },
    { name: "이름 짓기", page: "naming" },
  ];
  return (
    <div className={styles.progressBar}>
      {progressBar.map((a, i) => (
        <>
          <span
            className={page === a.page ? styles.selected : styles.progressBar}
          >
            {a.name}
          </span>
          <span> {i < 2 ? ">" : null} </span>
        </>
      ))}
    </div>
  );
};
