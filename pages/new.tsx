import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { SelectBackground } from "../components/SelectBackground";
import styles from "../styles/New.module.scss";
import { SelectShowcase } from "../components/SelectShowcase";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
const New: NextPage = () => {
  const [name, setName] = useState("");
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [selectedShowcase, setSelectedShowcase] = useState(0);

  const router = useRouter();

  const onSubmit = async () => {
    const result = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          showcase: selectedShowcase + 1,
          background: selectedBackground + 1,
        }),
      })
    ).json();

    router.push(`/game/${result.id}`);
  };

  return (
    <Layout
      hasHeader
      background={`/assets/backgrounds/background${selectedBackground + 1}.jpg`}
    >
      <div className={styles.form}>
        <div className={styles.header}>
          <div className={styles.imagecontainer}>
            <img
              src={`/assets/showcases/showcase${selectedShowcase + 1}.png`}
            />
          </div>
          <div className={styles.titlecontainer}>
            <button className={styles.pencil}></button>
            <input
              className={styles.title}
              type="text"
              placeholder="이름 입력"
              autoFocus
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={10}
            ></input>
            <div className={styles.subtitle}>showcase</div>
          </div>
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
        <button
          className={styles.button}
          onClick={() => onSubmit()}
          disabled={name.length === 0}
        >
          만들기 완료!
        </button>
      </div>
    </Layout>
  );
};

export default New;
