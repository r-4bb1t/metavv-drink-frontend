import { CSSProperties } from "react";
import styles from "../styles/Create.module.scss";

interface Props {
  title: string;
  subTitle: string;
  style?: CSSProperties;
}

export function CreateHeader({ title, subTitle, style }: Props) {
  return (
    <div className={styles.header} style={style}>
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </div>
  );
}
