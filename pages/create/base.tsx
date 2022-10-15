import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import {
  BaseType,
  baseByKey,
} from "../../components/IngredientButton/constants";
import { Layout } from "../../components/Layout";
import common from "../../styles/Common.module.scss";

const Base: NextPage = () => {
  const [selectedBase, setSelectedBase] = useState<string | undefined>(
    undefined
  );

  const baseList: BaseType[] = [1, 2, 3, 4, 5].map((key) => baseByKey[key]);

  const baseButtons = baseList.map((base) => {
    return (
      <IngredientButton.Big
        key={base.name}
        id={base.name}
        label={base.name}
        description={base.description}
        value={base.name}
        onClick={() => setSelectedBase(base.name)}
      />
    );
  });

  return (
    <Layout hasHeader>
      <CreateHeader
        title="1. 기주"
        subTitle="2팀과 나의 우정 도수는? (1개 선택)"
        style={{ marginBottom: 20 }}
      />
      {baseButtons}
      <Link href="/create/main">
        <a>
          <button className={common.button} disabled={!selectedBase}>
            다음
          </button>
        </a>
      </Link>
    </Layout>
  );
};

export default Base;
