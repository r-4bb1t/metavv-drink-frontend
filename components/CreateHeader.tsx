import styles from "../styles/Create.module.scss";

interface Props {
  title: string;
  subTitle: string;
}

export function CreateHeader({ title, subTitle }: Props) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </div>
  );
}
