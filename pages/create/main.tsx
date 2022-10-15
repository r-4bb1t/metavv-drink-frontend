import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import { ingredients } from "../../components/IngredientButton/constants";
import { Layout } from "../../components/Layout";
import common from "../../styles/Common.module.scss";

const Main: NextPage = () => {
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

  return (
    <Layout hasHeader>
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
      <Link href="/create/sub">
        <a>
          <button
            className={common.button}
            disabled={selectedMain.length === 0}
          >
            다음
          </button>
        </a>
      </Link>
    </Layout>
  );
};

export default Main;
