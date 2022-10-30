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

  const next = () => setState((s) => s + 1);

  const onSubmit = () => {};

  const Components = {
    [STATE.base]: <Base next={next} />,
    [STATE.main]: <Main next={next} />,
    [STATE.sub]: <Sub next={next} />,
    [STATE.garnish]: <Garnish next={next} />,
    [STATE.glass]: <Glass next={next} />,
    [STATE.naming]: <Naming onSubmit={onSubmit} />,
  };

  return <Layout hasHeader>{Components[state]}</Layout>;
};

export default Home;
