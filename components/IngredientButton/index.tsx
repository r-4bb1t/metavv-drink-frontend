import type { ReactNode } from "react";
import { IngredientButtonBig } from "./IngredientButtonBig";
import { IngredientButtonSmall } from "./IngredientButtonSmall";

interface Props {
  children?: ReactNode;
}

export function IngredientButton({ children }: Props) {
  return <div>{children}</div>;
}

IngredientButton.Big = IngredientButtonBig;
IngredientButton.Small = IngredientButtonSmall;
