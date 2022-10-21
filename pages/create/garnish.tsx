import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import {
  GarnishType,
  garnishByKey,
} from "../../components/IngredientButton/constants";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";
import common from "../../styles/Common.module.scss";

const Garnish: NextPage = () => {
  const [selectedGarnish, setSelectedGarnish] = useState<string | undefined>(
    undefined
  );

  const garnishList: GarnishType[] = [1, 2, 3, 4, 5].map(
    (key) => garnishByKey[key]
  );

  const garnishButtons = garnishList.map((garnish) => (
    <IngredientButton.Big
      key={garnish.name}
      id={garnish.name}
      label={garnish.name}
      description={garnish.description}
      value={garnish.name}
      onChange={() => setSelectedGarnish(garnish.name)}
    />
  ));

  return (
    <Layout hasHeader>
      <ProgressBar page={"ingredient"} />
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
