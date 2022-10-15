import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import { ingredients } from "../../components/IngredientButton/constants";
import { Layout } from "../../components/Layout";
import common from "../../styles/Common.module.scss";

const Sub: NextPage = () => {
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

  return (
    <Layout hasHeader>
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
      <Link href="/create/garnish">
        <a>
          <button className={common.button} disabled={selectedSub.length === 0}>
            다음
          </button>
        </a>
      </Link>
    </Layout>
  );
};

export default Sub;
