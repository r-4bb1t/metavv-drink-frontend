import { CocktailInfo } from "../../constants/types";
import { A } from "./A";
import { B } from "./B";
import { C } from "./C";
import styles from "./styles.module.scss";

export const Cocktail = ({
  cocktail,
  setSelectedCocktail,
}: {
  cocktail: CocktailInfo;
  setSelectedCocktail: (cocktail: CocktailInfo) => void;
}) => {
  return (
    <>
      <div
        className={styles.cocktail}
        onClick={() => setSelectedCocktail(cocktail)}
      >
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
        <div className={styles.text}>{cocktail.title}</div>
      </div>
    </>
  );
};
