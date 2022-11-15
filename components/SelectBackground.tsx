import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import styles from "../styles/Select.module.scss";
import "swiper/css";
import "swiper/css/free-mode";

export const SelectBackground = ({
  selectedBackground,
  setSelectedBackground,
}: {
  selectedBackground: number;
  setSelectedBackground: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={3}
      spaceBetween={0}
      style={{ padding: "20px 0", overflow: "visible" }}
      modules={[FreeMode]}
    >
      {[...Array(3)].map((_, i) => (
        <SwiperSlide key={i}>
          <button
            className={`${styles.cardBox} ${
              selectedBackground === i ? styles.bordered : ""
            }`}
            onClick={() => setSelectedBackground(i)}
          >
            {selectedBackground === i && (
              <div className={styles.selected}></div>
            )}
            <img
              className={styles.cardImg}
              src={`/assets/backgrounds/thumbnail/background (${i + 1}).jpg`}
              alt="배경"
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
