import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      #크리에이터 화면 - 메인화면
      <br />
      /
      <br />
      <Link href="/new">
        <a>
          <button>시작하기</button>
        </a>
      </Link>
    </Layout>
  );
};

export default Home;
