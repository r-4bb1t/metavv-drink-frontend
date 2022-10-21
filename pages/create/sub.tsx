import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import { ingredients } from "../../components/IngredientButton/constants";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";

const Sub: NextPage = () => {
  const router = useRouter();
  const [selectedSub, setSelectedSub] = useState<string[]>([]);

  const ingredientButtons = ingredients.map((ingredient) => (
    <IngredientButton.Small
      key={ingredient}
      id={ingredient}
      label={ingredient}
      value={ingredient}
      onChange={(_, checked: boolean) => {
        if (checked) {
          setSelectedSub([...selectedSub, ingredient]);
        } else {
          setSelectedSub(selectedSub.filter((value) => value !== ingredient));
        }
      }}
    />
  ));

  const handleClickCTA = (e) => {
    e.preventeDefault();
    router.push("/create/garnish");
  };

  return (
    <Layout hasHeader>
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
    </Layout>
  );
};

export default Sub;
