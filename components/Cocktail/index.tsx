import { CocktailInfo } from "../../constants/types";
import { A } from "../../public/assets/cocktail/A";
import { B } from "../../public/assets/cocktail/B";
import { C } from "../../public/assets/cocktail/C";
import styles from "./styles.module.scss";

export const Cocktail = ({ cocktail }: { cocktail: CocktailInfo }) => {
  return (
    <div className={styles.cocktail}>
      {cocktail.glass === 1 && (
        <A
          gradient={Math.floor(cocktail.drink / 10) as 12 | 13 | 2 | 3}
          garnish={cocktail.garnish}
        />
      )}
      {cocktail.glass === 2 && (
        <B
          gradient={Math.floor(cocktail.drink / 10) as 12 | 13 | 2 | 3}
          garnish={cocktail.garnish}
        />
      )}
      {cocktail.glass === 3 && (
        <C
          gradient={Math.floor(cocktail.drink / 10) as 12 | 13 | 2 | 3}
          garnish={cocktail.garnish}
        />
      )}
      <div>{cocktail.title}</div>
    </div>
  );
};
