import type { NextPage } from "next";
import { BottomCTA } from "../../components/BottomCTA";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";

const Naming: NextPage = () => {
  return (
    <Layout hasHeader>
      <ProgressBar page={"naming"} />
      <BottomCTA>제작 완료!</BottomCTA>
    </Layout>
  );
};

export default Naming;
