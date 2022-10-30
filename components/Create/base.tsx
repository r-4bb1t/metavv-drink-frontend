import { useRouter } from "next/router";
import { useState } from "react";
import { BottomCTA } from "../BottomCTA";
import { CreateHeader } from "../CreateHeader";
import { IngredientButton } from "../IngredientButton";
import { BaseType, baseByKey } from "../IngredientButton/constants";
import { Layout } from "../Layout";
import { ProgressBar } from "../ProgressBar";

const Base = ({ next }: { next: () => void }) => {
  const router = useRouter();
  const [selectedBase, setSelectedBase] = useState<string | undefined>(
    undefined
  );

  const baseList: BaseType[] = [1, 2, 3, 4, 5].map((key) => baseByKey[key]);

  const baseButtons = baseList.map((base) => (
    <IngredientButton.Big
      key={base.name}
      id={base.name}
      label={base.name}
      description={base.description}
      value={base.name}
      onChange={() => setSelectedBase(base.name)}
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
        title="1. 기주"
        subTitle="2팀과 나의 우정 도수는? (1개 선택)"
        style={{ marginBottom: 20 }}
      />
      {baseButtons}
      <BottomCTA onClick={handleClickCTA} disabled={!selectedBase}>
        다음
      </BottomCTA>
    </>
  );
};

export default Base;
