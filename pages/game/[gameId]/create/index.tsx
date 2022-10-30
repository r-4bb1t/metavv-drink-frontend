import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BottomCTA } from "../../../../components/BottomCTA";
import Base from "../../../../components/Create/base";
import Garnish from "../../../../components/Create/garnish";
import Glass from "../../../../components/Create/glass";
import Main from "../../../../components/Create/main";
import Naming from "../../../../components/Create/naming";
import Sub from "../../../../components/Create/sub";
import { CreateHeader } from "../../../../components/CreateHeader";
import { Layout } from "../../../../components/Layout";
import { ProgressBar } from "../../../../components/ProgressBar";
import { Recipe } from "../../../../components/Recipe";
import styles from "./styles.module.scss";

enum STATE {
  base,
  main,
  sub,
  garnish,
  glass,
  naming,
}

const Home: NextPage = () => {
  const router = useRouter();
  const [state, setState] = useState(STATE.base);

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
    try {
      const result = await (
        await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/game/${router.query.gameId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              base: selectedBase + 1,
              main: selectedMain.map((m) => m + 1),
              sub: selectedSub.map((b) => b + 1),
              garnish: selectedGarnish + 4,
              glass: selectedGlass + 1,
              title,
              comment,
            }),
          }
        )
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
      <Layout hasHeader back={prev}>
        {Components[state]}
      </Layout>
      {isRecipeOpen !== -1 && (
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
          close={() => router.push(`/game/${router.query.gameId}`)}
        />
      )}
    </>
  );
};

export default Home;
