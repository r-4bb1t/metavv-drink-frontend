import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import { ingredients } from "../../components/IngredientButton/constants";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";

const Main: NextPage = () => {
  const router = useRouter();
  const [selectedMain, setSelectedMain] = useState<string[]>([]);

  const ingredientButtons = ingredients.map((ingredient) => (
    <IngredientButton.Small
      key={ingredient}
      id={ingredient}
      label={ingredient}
      value={ingredient}
      onChange={(_, checked: boolean) => {
        if (checked) {
          setSelectedMain([...selectedMain, ingredient]);
        } else {
          setSelectedMain(selectedMain.filter((value) => value !== ingredient));
        }
      }}
    />
  ));

  const handleClickCTA = (e) => {
    e.preventDefault();
    router.push("/create/sub");
  };

  return (
    <Layout hasHeader>
      <ProgressBar page={"ingredient"} />
      <CreateHeader
        title="2. 주재료"
        subTitle="2팀의 첫인상은 어땠어? (3개 선택)"
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
      <BottomCTA onClick={handleClickCTA} disabled={selectedMain.length !== 3}>
        다음
      </BottomCTA>
    </Layout>
  );
};

export default Main;
