import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout hasHeader>
      #크리에이터 화면 - 새 게임 만들기
      <br />
      /new
      <br />
    </Layout>
  );
};

export default Home;
