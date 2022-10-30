import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import { ingredients } from "../../components/IngredientButton/constants";
import { ProgressBar } from "../../components/ProgressBar";

const Sub = ({
  next,
  selectedSub,
  setSelectedSub,
}: {
  next: () => void;
  selectedSub: number[];
  setSelectedSub: Dispatch<SetStateAction<number[]>>;
}) => {
  const router = useRouter();

  const ingredientButtons = ingredients.map((ingredient, i) => (
    <IngredientButton.Small
      key={ingredient}
      id={ingredient}
      label={ingredient}
      value={ingredient}
      onChange={(_, checked: boolean) => {
        if (checked) {
          setSelectedSub([...selectedSub, i]);
        } else {
          setSelectedSub(selectedSub.filter((value) => value !== i));
        }
      }}
    />
  ));

  const handleClickCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <>
      <ProgressBar page={"ingredient"} />
      <CreateHeader
        title="3. 부재료"
        subTitle="2팀의 현인상은 어때? (3개 선택)"
        style={{ marginBottom: 15 }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {ingredientButtons}
      </div>
      <BottomCTA onClick={handleClickCTA} disabled={selectedSub.length !== 3}>
        다음
      </BottomCTA>
    </>
  );
};

export default Sub;
