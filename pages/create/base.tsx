import type { NextPage } from "next";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import { Layout } from "../../components/Layout";

const Base: NextPage = () => {
  return (
    <Layout hasHeader>
      <CreateHeader title="1. 기주" subTitle="2팀과 나의 우정 도수는?" />
      <IngredientButton.Big
        label="보드카 (90º)"
        description="우린 영혼의 단짝 친구지!"
        checked={true}
      />
    </Layout>
  );
};

export default Base;
