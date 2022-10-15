import { useCallback } from "react";
import styles from "../../styles/IngredientButton.module.scss";

interface Props {
  id: string;
  label: string;
  description: string;
  value: string;
  onClick?: () => void;
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

export function IngredientButtonBig({
  id,
  label,
  description,
  value,
  onClick,
  checked,
  onChange,
}: Props) {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange !== undefined) {
        onChange(event, event.target.checked);
      }
    },
    [onChange]
  );

  return (
    <div className={styles.container_big}>
      <input
        className={styles["visually-hidden"]}
        type="radio"
        name="ingredient"
        value={value}
        id={id}
        onClick={onClick}
        checked={checked}
        onChange={handleInputChange}
      />
      <label htmlFor={id}>
        <span className={styles.main}>{label}</span>
        <span className={styles.sub}>{description}</span>
      </label>
    </div>
  );
}
