import { Dispatch, SetStateAction } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { ProgressBar } from "../../components/ProgressBar";

const Naming = ({
  onSubmit,
  name,
  setName,
  title,
  setTitle,
  comment,
  setComment,
}: {
  onSubmit: () => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <ProgressBar page={"naming"} />
      <BottomCTA onClick={() => onSubmit()}>제작 완료!</BottomCTA>
    </>
  );
};

export default Naming;
