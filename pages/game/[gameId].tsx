import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BottomCTA } from "../../components/BottomCTA";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Create.module.scss";
import "swiper/css";
import "swiper/css/pagination";

const Main: NextPage = () => {
  const router = useRouter();

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
            <img src="/assets/showcases/showcase1.png" />
          </div>
          <div className={styles.titlecontainer}>
            <div className={styles.title}>2팀</div>
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
                  <div></div>
                  <div></div>
                  <div></div>
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
        <BottomCTA onClick={() => {}} disabled={true}>
          제조 시작!
        </BottomCTA>
      </div>
    </Layout>
  );
};

export default Main;
