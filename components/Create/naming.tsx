import { Dispatch, SetStateAction } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { ProgressBar } from "../../components/ProgressBar";
import styles from "../../styles/Common.module.scss";

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
      <div className={styles.ul}>
        <div>내가 만든 우정주의 이름!</div>
        <input
          placeholder="입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={15}
        />
        <div>친구에게 한 마디</div>
        <textarea
          placeholder="입력해주세요."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={30}
        />
        <div>내 이름은?</div>
        <input
          placeholder="입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={15}
        />
      </div>
      <BottomCTA onClick={() => onSubmit()}>만들기 완료!</BottomCTA>
    </>
  );
};

export default Naming;
