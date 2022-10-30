import type { NextPage } from "next";
import { BottomCTA } from "../../components/BottomCTA";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";

const Naming = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <>
      <ProgressBar page={"naming"} />
      <BottomCTA onClick={() => onSubmit()}>제작 완료!</BottomCTA>
    </>
  );
};

export default Naming;
