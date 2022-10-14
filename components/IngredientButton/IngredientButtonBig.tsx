import styles from "../../styles/IngredientButton.module.scss";

interface Props {
  id: string;
  label: string;
  description: string;
  checked: boolean;
}

export function IngredientButtonBig({
  id,
  label,
  description,
  checked,
}: Props) {
  return (
    <div className={styles.container_big}>
      <input
        className={styles["visually-hidden"]}
        type="radio"
        name="ingredient"
        id={id}
      />
      <label htmlFor={id}>
        <span className={styles.main}>{label}</span>
        <span className={styles.sub}>{description}</span>
      </label>
    </div>
  );
}
