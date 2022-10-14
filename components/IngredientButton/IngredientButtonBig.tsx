import styles from "../../styles/IngredientButton.module.scss";

interface Props {
  label: string;
  description: string;
  checked: boolean;
}

export function IngredientButtonBig({ label, description, checked }: Props) {
  return (
    <div className={styles.container_big}>
      <input
        className={styles["visually-hidden"]}
        type="checkbox"
        id="ingredient-button-big"
        checked={checked}
      />
      <label htmlFor="ingredient-button-big">
        <span className={styles.main}>{label}</span>
        <span className={styles.sub}>{description}</span>
      </label>
    </div>
  );
}
