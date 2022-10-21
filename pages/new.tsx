import type { NextPage } from "next";
import Link from "next/link";
import common from "../styles/Common.module.scss";
import { Layout } from "../components/Layout";
import { SelectBackground } from "../components/SelectBackground";
import styles from "../styles/New.module.scss";
import { SelectShowcase } from "../components/SelectShowcase";
const New: NextPage = () => {
  return (
    <Layout hasHeader>
      <div className={styles.nameContainer}>
        <input
          className={styles.nameBox}
          type="text"
          placeholder="이름 입력"
          autoFocus
          required
        ></input>
        <div className={styles.pencil}></div>
        <div className={styles.showcaseHeader}>showcase</div>
      </div>
      <form action="POST" className={styles.form}>
        <section>
          <p>배경선택</p>
          <div className={styles.container_slider}>
            <SelectBackground></SelectBackground>
          </div>
        </section>
        <section>
          <p>쇼케이스 선택</p>
          <div className={styles.container_slider}>
            <SelectShowcase></SelectShowcase>
          </div>
        </section>
        <Link href="/new">
          <a>
            <button className={styles.button}>제작 완료!</button>
          </a>
        </Link>
      </form>
    </Layout>
  );
};

export default New;
