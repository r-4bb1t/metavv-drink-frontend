import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BottomCTA } from "../../components/BottomCTA";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Create.module.scss";
import "swiper/css";
import "swiper/css/pagination";

interface GameInfo {
  name: string;
  background: number;
  showcase: number;
  result: {
    index: number;
    drink: number;
    name: string;
    base: number;
    main: number[];
    sub: number[];
    garnish: number;
    glass: number;
    title: string;
    comment: string;
  }[];
}

const Main: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<GameInfo>();

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

  return (
    <Layout
      hasHeader
      background={
        "https://user-images.githubusercontent.com/52532871/197913898-6d73acc8-6614-40f2-9228-47c11efce0ea.png"
      }
    >
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.imagecontainer}>
            <img src="/assets/showcases/showcase (1).png" />
          </div>
          <div className={styles.titlecontainer}>
            <div className={styles.title}>{data?.name}</div>
            <div className={styles.subtitle}>showcase</div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          direction="horizontal"
          modules={[Pagination]}
          pagination={{
            clickable: false,
            renderBullet: (index, className) =>
              '<span class="' + className + '"></span>',
          }}
        >
          {[...Array(4)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className={styles.grid}>
                <div className={styles.row}>
                  {data?.result.map((cocktail) => (
                    <></>
                  ))}
                </div>
                <div className={styles.row}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className={styles.row}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <BottomCTA onClick={() => {}}>제조 시작!</BottomCTA>
      </div>
    </Layout>
  );
};

export default Main;
