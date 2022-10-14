import styles from "../../styles/IngredientButton.module.scss";

interface Props {
  label: string;
  checked: boolean;
}

export function IngredientButtonSmall({ label, checked }: Props) {
  return (
    <div className={styles.container_small}>
      <input
        className={styles["visually-hidden"]}
        type="checkbox"
        id="ingredient-button-small"
        checked={checked}
      />
      <label htmlFor="ingredient-button-small">{label}</label>
    </div>
  );
}
