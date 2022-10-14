import styles from "../../styles/IngredientButton.module.scss";

interface Props {
  id: string;
  label: string;
  description: string;
  value: string;
  onClick: () => void;
}

export function IngredientButtonBig({
  id,
  label,
  description,
  value,
  onClick,
}: Props) {
  return (
    <div className={styles.container_big}>
      <input
        className={styles["visually-hidden"]}
        type="radio"
        name="ingredient"
        value={value}
        id={id}
        onClick={onClick}
      />
      <label htmlFor={id}>
        <span className={styles.main}>{label}</span>
        <span className={styles.sub}>{description}</span>
      </label>
    </div>
  );
}
