import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "../styles/Layout.module.scss";

export const Layout = ({
  children,
  hasHeader = false,
  background,
  back,
}: {
  children: ReactNode;
  hasHeader?: boolean;
  background?: string;
  back?: Function;
}) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main
        className={`${styles.main} ${hasHeader && styles.header_main}`}
        style={{
          backgroundImage: background ? `url(${background})` : "none",
        }}
      >
        {background && <div className={styles.gradient}></div>}
        {hasHeader && (
          <header className={styles.header}>
            <button
              className={styles.backbtn}
              onClick={() => {
                if (back) back();
                else router.back();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 492 492"
                width="20px"
                height="20px"
                fill="white"
              >
                <g>
                  <g>
                    <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z" />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </button>
            우정주 만들기
            <div></div>
          </header>
        )}
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};
