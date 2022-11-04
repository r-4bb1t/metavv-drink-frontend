import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { Layout } from "../../../components/Layout";
import styles from "../../../styles/Main.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { GameInfo } from "../../../constants/types";
import Create from "../../../components/Create";
import { Showcase } from "../../../components/Showcase";
import common from "../../../styles/Common.module.scss";
import Link from "next/link";

export enum STATE {
  start,
  create,
  result,
}

const Main: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<GameInfo>();
  const [state, setState] = useState(STATE.start);

  const fetchData = useCallback(async () => {
    try {
      const result = await (
        await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/${router.query.gameId}`
        )
      ).json();

      setData(result);
    } catch (e) {
      console.log(e);
    }
  }, [router.query.gameId]);

  useEffect(() => {
    if (router.query.gameId) {
      fetchData();
    }
  }, [fetchData, router]);

  if (state === STATE.start)
    return (
      <Layout>
        <div className={styles.header}>⚜️ 진열 커스텀</div>
        <img
          src="/assets/thumbnail.png"
          alt="thumbnail"
          className={common.square}
        />
        <div className={styles.title}>{data?.name}의 우정주 만들기</div>
        <div className={styles.contents}>
          친구들이 제조해 주는 우정을 담은 술.
          <br />
          친구들과 꾸며가는 나만의 쇼케이스를 제작해보세요!
        </div>
        <button
          className={common.button}
          onClick={() => setState(STATE.create)}
        >
          우정주 제조하러 가기
        </button>
      </Layout>
    );
  else if (state === STATE.create) {
    return (
      <Create
        gameId={router.query.gameId as string}
        back={() => setState(STATE.start)}
        goToResult={() => setState(STATE.result)}
      />
    );
  } else {
    return <Showcase setState={setState} />;
  }
};

export default Main;
