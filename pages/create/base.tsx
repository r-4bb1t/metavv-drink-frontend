import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import { Layout } from "../../components/Layout";
import common from "../../styles/Common.module.scss";

type BaseType = {
  name: string;
  description: string;
};

const baseByKey: Record<number, BaseType> = {
  1: { name: "보드카 (90º)", description: "우린 영혼의 단짝 친구지!" },
  2: { name: "브랜디 (60º)", description: "평생 친구가 되고 싶은 사이!" },
  3: { name: "진 (40º)", description: "요즘 부쩍 친해진 사이!" },
  4: { name: "소주 (16º)", description: "아직 모르지만 친해져보고 싶은 사이!" },
  5: { name: "맥주 (5º)", description: "아직까지는 이름만 아는 사이!" },
};

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
