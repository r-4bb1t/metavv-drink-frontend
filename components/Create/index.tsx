import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BottomCTA } from "../BottomCTA";
import Base from "./base";
import Garnish from "./garnish";
import Glass from "./glass";
import Main from "./main";
import Naming from "./naming";
import Sub from "./sub";
import { CreateHeader } from "../CreateHeader";
import { Layout } from "../Layout";
import { ProgressBar } from "../ProgressBar";
import { Recipe } from "../Recipe";
import styles from "./styles.module.scss";

enum STATE {
  base,
  main,
  sub,
  garnish,
  glass,
  naming,
}

const Create = ({
  gameId,
  back,
  goToResult,
}: {
  gameId: string;
  back: Function;
  goToResult: Function;
}) => {
  const [state, setState] = useState(STATE.base);
  const router = useRouter();

  const [selectedBase, setSelectedBase] = useState<number>(-1);
  const [selectedMain, setSelectedMain] = useState<number[]>([]);
  const [selectedSub, setSelectedSub] = useState<number[]>([]);
  const [selectedGarnish, setSelectedGarnish] = useState<number>(-1);
  const [selectedGlass, setSelectedGlass] = useState<number>(-1);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");

  const [isRecipeOpen, setIsRecipeOpen] = useState(-1);

  const next = () => setState((s) => s + 1);
  const prev = () => {
    if (state > 0) setState((s) => s - 1);
  };

  const onSubmit = async () => {
    if (name.length === 0 || comment.length === 0 || title.length === 0) {
      alert("1글자 이상 입력해주세요.");
      return;
    }
    try {
      const result = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/game/${gameId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            base: selectedBase + 1,
            main: selectedMain,
            sub: selectedSub,
            garnish: selectedGarnish + 5,
            glass: selectedGlass + 1,
            title,
            comment,
          }),
        })
      ).json();

      setIsRecipeOpen(result.result);
    } catch (e) {
      console.log(e);
    }
  };

  const Components = {
    [STATE.base]: (
      <Base
        next={next}
        selectedBase={selectedBase}
        setSelectedBase={setSelectedBase}
      />
    ),
    [STATE.main]: (
      <Main
        next={next}
        selectedMain={selectedMain}
        setSelectedMain={setSelectedMain}
      />
    ),
    [STATE.sub]: (
      <Sub
        next={next}
        selectedSub={selectedSub}
        setSelectedSub={setSelectedSub}
      />
    ),
    [STATE.garnish]: (
      <Garnish
        next={next}
        selectedGarnish={selectedGarnish}
        setSelectedGarnish={setSelectedGarnish}
      />
    ),
    [STATE.glass]: (
      <Glass
        next={next}
        selectedGlass={selectedGlass}
        setSelectedGlass={setSelectedGlass}
      />
    ),
    [STATE.naming]: (
      <Naming
        onSubmit={onSubmit}
        name={name}
        setName={setName}
        comment={comment}
        setComment={setComment}
        title={title}
        setTitle={setTitle}
      />
    ),
  };

  return (
    <>
      {isRecipeOpen === -1 ? (
        <Layout hasHeader back={prev}>
          {Components[state]}
        </Layout>
      ) : (
        <Layout hasHeader back={prev}>
          <Recipe
            cocktail={{
              name,
              base: selectedBase + 1,
              main: selectedMain.map((m) => m + 1),
              sub: selectedSub.map((b) => b + 1),
              garnish: (selectedGarnish + 4) as 4 | 5 | 6 | 7 | 8,
              glass: selectedGlass + 1,
              title,
              comment,
              drink: isRecipeOpen,
            }}
            noModal
            close={() => back()}
          />
          <div>
            <button className={styles.button} onClick={() => router.push("/")}>
              나도 쇼케이스 만들기
            </button>
            <button
              className={`${styles.button} ${styles.secondarybutton}`}
              onClick={() => goToResult()}
            >
              친구 쇼케이스 확인하기
            </button>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Create;
