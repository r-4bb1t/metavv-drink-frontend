import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout hasHeader>
      #참여자 화면 - 메인화면
      <br />
      /game/[gameId]
      <br />
      <br />
      <button>우정주 제조하러 가기</button>
    </Layout>
  );
};

export default Home;
