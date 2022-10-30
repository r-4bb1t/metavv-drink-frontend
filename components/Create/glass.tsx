import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { CreateHeader } from "../../components/CreateHeader";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";
import common from "../../styles/Common.module.scss";

const Glass = ({ next }: { next: () => void }) => {
  const router = useRouter();
  const [selectedGlass, setSelectedGlass] = useState<string | undefined>(
    undefined
  );

  const handleClickCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <>
      <ProgressBar page={"glass"} />
      <CreateHeader
        title="술잔 선택"
        subTitle="첫 만남부터 지금까지 우리 사이는? (1개 선택)"
        style={{ marginBottom: 20 }}
      />
      <BottomCTA onClick={handleClickCTA} disabled={!selectedGlass}>
        다음
      </BottomCTA>
    </>
  );
};

export default Glass;
