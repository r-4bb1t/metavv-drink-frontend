import { CocktailInfo } from "../../constants/types";
import { A } from "../Cocktail/A";
import { B } from "../Cocktail/B";
import { C } from "../Cocktail/C";
import {
  baseByKey,
  garnishByKey,
  ingredients,
} from "../IngredientButton/constants";
import styles from "./styles.module.scss";

export const Recipe = ({
  cocktail,
  close,
  noModal = false,
}: {
  cocktail: CocktailInfo;
  close: () => void;
  noModal?: boolean;
}) => {
  return (
    <div className={!noModal ? styles.recipecontainer : ""}>
      <div className={styles.recipe}>
        <div className={styles.backspace} onClick={() => close()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <mask
              id="mask0_236_1357"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="30"
              height="30"
            >
              <rect width="30" height="30" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_236_1357)">
              <path
                d="M14.25 20L17.5 16.75L20.75 20L22.5 18.25L19.25 15L22.5 11.75L20.75 10L17.5 13.25L14.25 10L12.5 11.75L15.75 15L12.5 18.25L14.25 20ZM3.75 15L9.1875 7.3125C9.41667 6.97917 9.71333 6.71875 10.0775 6.53125C10.4425 6.34375 10.8333 6.25 11.25 6.25H23.75C24.4375 6.25 25.0263 6.495 25.5163 6.985C26.0054 7.47417 26.25 8.0625 26.25 8.75V21.25C26.25 21.9375 26.0054 22.5263 25.5163 23.0163C25.0263 23.5054 24.4375 23.75 23.75 23.75H11.25C10.8333 23.75 10.4425 23.6562 10.0775 23.4688C9.71333 23.2812 9.41667 23.0208 9.1875 22.6875L3.75 15ZM6.8125 15L11.25 21.25H23.75V8.75H11.25L6.8125 15Z"
                fill="#696969"
              />
            </g>
          </svg>
        </div>
        <div className={styles.cocktail}>
          {cocktail.glass === 1 && (
            <A
              gradient={Math.floor(cocktail.drink / 10) as 12 | 13 | 2 | 3}
              garnish={cocktail.garnish}
              color="black"
            />
          )}
          {cocktail.glass === 2 && (
            <B
              gradient={Math.floor(cocktail.drink / 10) as 12 | 13 | 2 | 3}
              garnish={cocktail.garnish}
              color="black"
            />
          )}
          {cocktail.glass === 3 && (
            <C
              gradient={Math.floor(cocktail.drink / 10) as 12 | 13 | 2 | 3}
              garnish={cocktail.garnish}
              color="black"
            />
          )}
        </div>
        <div className={styles.title}>
          {"["}
          {cocktail.title}
          {"]"}
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>레시피</th>
              <th>계량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{baseByKey[cocktail.base].name}</td>
              <td>150ml</td>
            </tr>
            <tr>
              <td>
                {cocktail.main.map((m, i) => (
                  <span key={i}>{ingredients[m]} </span>
                ))}
              </td>
              <td>첫인상 50ml</td>
            </tr>
            <tr>
              <td>
                {cocktail.sub.map((m, i) => (
                  <span key={i}>{ingredients[m]} </span>
                ))}
              </td>
              <td>현인상 100ml</td>
            </tr>
            <tr>
              <td>
                {garnishByKey[cocktail.garnish - 4].name}{" "}
                <small>
                  ({garnishByKey[cocktail.garnish - 4].description})
                </small>
              </td>
              <td>1</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>친구에게 한 마디</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cocktail.comment}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>제조자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cocktail.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
