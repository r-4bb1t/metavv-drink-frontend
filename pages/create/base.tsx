import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import {
  BaseType,
  baseByKey,
} from "../../components/IngredientButton/constants";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";
import common from "../../styles/Common.module.scss";

const Base: NextPage = () => {
  const router = useRouter();
  const [selectedBase, setSelectedBase] = useState<string | undefined>(
    undefined
  );

  const baseList: BaseType[] = [1, 2, 3, 4, 5].map((key) => baseByKey[key]);

  const baseButtons = baseList.map((base) => (
    <IngredientButton.Big
      key={base.name}
      id={base.name}
      label={base.name}
      description={base.description}
      value={base.name}
      onChange={() => setSelectedBase(base.name)}
    />
  ));

  const handleClickCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/create/main");
  };

  return (
    <Layout hasHeader>
      <ProgressBar page={"ingredient"} />
      <CreateHeader
        title="1. 기주"
        subTitle="2팀과 나의 우정 도수는? (1개 선택)"
        style={{ marginBottom: 20 }}
      />
      {baseButtons}
      <BottomCTA onClick={handleClickCTA} disabled={!selectedBase}>
        다음
      </BottomCTA>
    </Layout>
  );
};

export default Base;
