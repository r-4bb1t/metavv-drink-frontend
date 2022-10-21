import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { CreateHeader } from "../../components/CreateHeader";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";
import common from "../../styles/Common.module.scss";

const Glass: NextPage = () => {
  const router = useRouter();
  const [selectedGlass, setSelectedGlass] = useState<string | undefined>(
    undefined
  );

  const handleClickCTA = (e) => {
    e.preventDefault();
    router.push("/create/naming");
  };

  return (
    <Layout hasHeader>
      <ProgressBar page={"glass"} />
      <CreateHeader
        title="술잔 선택"
        subTitle="첫 만남부터 지금까지 우리 사이는? (1개 선택)"
        style={{ marginBottom: 20 }}
      />
      <BottomCTA onClick={handleClickCTA} disabled={!selectedGlass}>
        다음
      </BottomCTA>
    </Layout>
  );
};

export default Glass;
