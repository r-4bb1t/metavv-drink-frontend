import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/Layout";
import common from "../styles/Common.module.scss";
import styles from "../styles/Main.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.header}>⚜️ 진열 커스텀</div>
      <img
        src="/assets/thumbnail.png"
        alt="thumbnail"
        className={common.square}
      />
      <div className={styles.title}>우정주 만들기</div>
      <div className={styles.contents}>
        친구들이 본 나의 첫인상, 현인상은?
        <br />
        친구들이 만들어준 나를 닮은 술을 나만의 쇼케이스에 저장해봐요!
      </div>
      <Link href="/new">
        <a>
          <button className={common.button}>쇼케이스 만들기</button>
        </a>
      </Link>
    </Layout>
  );
};

export default Home;
