import styles from "../styles/Create.module.scss";

interface Props {
  page: string;
}

// TODO: 페이지 라우팅 방식 정리한 후에 page prop 대신 router.pathname 사용하기

export const ProgressBar = ({ page }: Props) => {
  return (
    <div className={styles.progressBar}>
      <span className={page === "ingredient" ? styles.selected : ""}>
        재료 선택
      </span>
      <span>{" > "}</span>
      <span className={page === "glass" ? styles.selected : ""}>술잔 선택</span>
      <span>{" > "}</span>
      <span className={page === "naming" ? styles.selected : ""}>
        이름 짓기
      </span>
    </div>
  );
};
