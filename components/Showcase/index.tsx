import { Layout } from "../Layout";
import { Recipe } from "../Recipe";
import { Cocktail } from "../Cocktail";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BottomCTA } from "../BottomCTA";
import { CocktailInfo, GameInfo } from "../../constants/types";
import { useRouter } from "next/router";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { STATE } from "../../pages/game/[gameId]";
import styles from "./styles.module.scss";

export const Showcase = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<STATE>>;
}) => {
  const [selectedCocktail, setSelectedCocktail] = useState<CocktailInfo | null>(
    null
  );
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
      background={`/assets/backgrounds/background${data?.background || 1}.jpg`}
      back={() => router.push("/")}
    >
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.imagecontainer}>
            <img src={`/assets/showcases/showcase${data?.showcase || 1}.png`} />
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
          {[...Array(Math.ceil((data?.result.length || 1) / 9))].map((_, i) => (
            <SwiperSlide key={i}>
              <div className={styles.grid}>
                {[...Array(3)].map((_, ii) => (
                  <div className={styles.row} key={ii}>
                    {data?.result
                      .slice(i * 9 + ii * 3, i * 9 + ii * 3 + 3)
                      .map((cocktail, iii) => (
                        <Cocktail
                          key={iii}
                          cocktail={cocktail}
                          setSelectedCocktail={setSelectedCocktail}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <BottomCTA
          onClick={() => {
            setState(STATE.create);
          }}
        >
          ????????? ?????????
        </BottomCTA>
      </div>
      {selectedCocktail !== null && (
        <Recipe
          cocktail={{
            ...selectedCocktail,
            garnish: selectedCocktail.garnish - 1,
          }}
          close={() => setSelectedCocktail(null)}
        />
      )}
    </Layout>
  );
};
