import type { NextPage } from "next";
import Link from "next/link";
import common from "../styles/Common.module.scss";
import { Layout } from "../components/Layout";
import { SelectBackground } from "../components/SelectBackground";
import styles from "../styles/New.module.scss";
import { SelectShowcase } from "../components/SelectShowcase";
import { useState } from "react";
const New: NextPage = () => {
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [selectedShowcase, setSelectedShowcase] = useState(0);
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
      <section>
        <p>배경선택</p>
        <div className={styles.container_slider}>
          <SelectBackground
            selectedBackground={selectedBackground}
            setSelectedBackground={setSelectedBackground}
          />
        </div>
      </section>
      <section>
        <p>쇼케이스 선택</p>
        <div className={styles.container_slider}>
          <SelectShowcase
            selectedShowcase={selectedShowcase}
            setSelectedShowcase={setSelectedShowcase}
          />
        </div>
      </section>
      <Link href="/new">
        <a>
          <button className={styles.button}>제작 완료!</button>
        </a>
      </Link>
    </Layout>
  );
};

export default New;
