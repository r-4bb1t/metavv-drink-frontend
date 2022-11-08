import { Dispatch, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import styles from "../styles/Select.module.scss";
import "swiper/css";
import "swiper/css/free-mode";

export const SelectShowcase = ({
  selectedShowcase,
  setSelectedShowcase,
}: {
  selectedShowcase: number;
  setSelectedShowcase: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={2}
      spaceBetween={0}
      style={{ padding: "20px 0", overflow: "visible" }}
      modules={[FreeMode]}
      breakpoints={{
        400: { slidesPerView: 3 },
      }}
    >
      {[...Array(6)].map((_, i) => (
        <SwiperSlide key={i}>
          <button
            className={`${styles.cardBox} ${styles.showcase} ${
              selectedShowcase === i ? styles.bordered : ""
            }`}
            onClick={() => setSelectedShowcase(i)}
          >
            {selectedShowcase === i && <div className={styles.selected}></div>}
            <img
              className={styles.cardImg}
              src={`/assets/showcases/thumbnail/showcase${i + 1}.png`}
              alt="배경"
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
