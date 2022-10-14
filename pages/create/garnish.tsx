import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import { Layout } from "../../components/Layout";
import common from "../../styles/Common.module.scss";

type GarnishType = {
  name: string;
  description: string;
};

const garnishByKey: Record<number, GarnishType> = {
  1: { name: "눈물", description: "이젠 거리두기 좀 합시다..." },
  2: { name: "스마일 감자", description: "평생 놀려주고 싶어!" },
  3: { name: "돌멩이", description: "내가 너의 걸림돌이 되어줄게." },
  4: {
    name: "입술",
    description: "움쫩쫩 액희야 \n 뽑뽀 갈겨도 되겐니 . . . ( ͡° ͜ʖ ͡°)",
  },
  5: { name: "결혼 반지", description: "평생 함께하자." },
};

const Garnish: NextPage = () => {
  const [selectedGarnish, setSelectedGarnish] = useState<string | undefined>(
    undefined
  );

  const garnishList: GarnishType[] = [1, 2, 3, 4, 5].map(
    (key) => garnishByKey[key]
  );

  const garnishButtons = garnishList.map((garnish) => {
    return (
      <IngredientButton.Big
        key={garnish.name}
        id={garnish.name}
        label={garnish.name}
        description={garnish.description}
        value={garnish.name}
        onClick={() => setSelectedGarnish(garnish.name)}
      />
    );
  });

  return (
    <Layout hasHeader>
      <CreateHeader
        title="4. 가니쉬"
        subTitle="2팀과 앞으로 어떤 사이가 되고 싶어? (1개 선택)"
        style={{ marginBottom: 20 }}
      />
      {garnishButtons}
      <Link href="/create/glass">
        <a>
          <button className={common.button} disabled={!selectedGarnish}>
            다음
          </button>
        </a>
      </Link>
    </Layout>
  );
};

export default Garnish;
