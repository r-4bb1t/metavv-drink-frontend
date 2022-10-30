import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { CreateHeader } from "../../components/CreateHeader";
import { IngredientButton } from "../../components/IngredientButton";
import {
  GarnishType,
  garnishByKey,
} from "../../components/IngredientButton/constants";
import { ProgressBar } from "../../components/ProgressBar";

const Garnish = ({
  next,
  selectedGarnish,
  setSelectedGarnish,
}: {
  next: () => void;
  selectedGarnish: number;
  setSelectedGarnish: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();

  const garnishList: GarnishType[] = [1, 2, 3, 4, 5].map(
    (key) => garnishByKey[key]
  );

  const garnishButtons = garnishList.map((garnish, i) => (
    <IngredientButton.Big
      key={garnish.name}
      id={garnish.name}
      label={garnish.name}
      description={garnish.description}
      value={garnish.name}
      onChange={() => setSelectedGarnish(i)}
    />
  ));

  const handleClickCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <>
      <ProgressBar page={"ingredient"} />
      <CreateHeader
        title="4. 가니쉬"
        subTitle="2팀과 앞으로 어떤 사이가 되고 싶어? (1개 선택)"
        style={{ marginBottom: 20 }}
      />
      {garnishButtons}
      <BottomCTA onClick={handleClickCTA} disabled={selectedGarnish == -1}>
        다음
      </BottomCTA>
    </>
  );
};

export default Garnish;
