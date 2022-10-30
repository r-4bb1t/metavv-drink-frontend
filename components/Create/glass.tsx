import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { BottomCTA } from "../../components/BottomCTA";
import { CreateHeader } from "../../components/CreateHeader";
import { Layout } from "../../components/Layout";
import { ProgressBar } from "../../components/ProgressBar";
import common from "../../styles/Common.module.scss";
import { IngredientButton } from "../IngredientButton";

const Glass = ({ next }: { next: () => void }) => {
  const router = useRouter();
  const [selectedGlass, setSelectedGlass] = useState<string | undefined>(
    undefined
  );

  const handleClickCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    next();
  };

  const glasses = [
    {
      name: "콜린스 글라스",
      detail: "보통 물잔과 모양이 비슷한 기다란 칵테일 잔",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="65"
          viewBox="0 0 32 65"
          fill="none"
        >
          <g clip-path="url(#clip0_76_212)">
            <path
              d="M28.4912 0.226562H2.7947C-0.389616 0.226562 0.0633453 1.78022 0.629547 9.58475C1.55812 22.3945 3.29296 56.5433 3.4515 60.8736C3.61004 65.2039 6.663 64.7645 15.6407 64.7645C23.9661 64.7645 27.6714 65.2039 27.8299 60.8736C27.9884 56.5433 29.7233 22.3945 30.6518 9.58475C31.218 1.78022 31.6755 0.226562 28.4912 0.226562Z"
              fill="url(#paint0_linear_76_212)"
              stroke="#202020"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.2"
              d="M23.391 0.45752H27.7802C27.7802 0.45752 25.0624 21.407 24.4147 51.692C24.4147 51.692 23.9844 51.8143 22.6481 52.0861C20.9405 52.4349 22.2133 14.6805 23.3865 0.45752H23.391Z"
              fill="url(#paint1_linear_76_212)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_76_212"
              x1="0.226412"
              y1="32.5001"
              x2="31.0595"
              y2="32.5001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0.1" />
              <stop offset="0.5" stop-opacity="0" />
              <stop offset="1" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_76_212"
              x1="24.7997"
              y1="0.45752"
              x2="24.7997"
              y2="52.0861"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.95" />
              <stop offset="0.12" stop-color="white" stop-opacity="0.78" />
              <stop offset="0.3" stop-color="white" stop-opacity="0.54" />
              <stop offset="0.47" stop-color="white" stop-opacity="0.35" />
              <stop offset="0.63" stop-color="white" stop-opacity="0.2" />
              <stop offset="0.77" stop-color="white" stop-opacity="0.09" />
              <stop offset="0.9" stop-color="white" stop-opacity="0.02" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_76_212">
              <rect width="31.2861" height="65" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "글렌캐넌 글라스",
      detail:
        "베이스 부분은 넓고 입구 부분은 좁아 증류주 향을 잘 모아주는 것이 특장점",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="65"
          viewBox="0 0 35 65"
          fill="none"
        >
          <g clip-path="url(#clip0_76_229)">
            <path
              d="M32.4729 24.5278C30.0858 17.0993 29.8367 3.39266 29.8367 1.99753C29.8367 0.602412 29.4245 0.221924 28.7088 0.221924H6.03811C5.32696 0.221924 4.91023 0.602412 4.91023 1.99753C4.91023 3.39266 4.6611 17.0993 2.27399 24.5278C-0.113114 31.9564 -1.57165 42.3021 4.6611 47.0763C10.8939 51.8505 9.30396 53.9069 7.11615 58.1512C4.95553 62.3456 2.37364 64.6421 17.104 64.7735C17.1945 64.7735 17.2806 64.7735 17.3712 64.7735C17.4618 64.7735 17.5479 64.7735 17.6385 64.7735C32.3688 64.6376 29.7914 62.3411 27.6263 58.1467C25.4385 53.9024 23.8486 51.846 30.0813 47.0718C36.3141 42.2975 34.8555 31.9519 32.4684 24.5278H32.4729Z"
              fill="url(#paint0_linear_76_229)"
              stroke="#202020"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.1"
              d="M2.11084 44.1863L5.07774 40.9295L9.20422 45.4546L13.2446 41.0201L17.2262 45.3912L21.2938 40.9295L25.3614 45.3912L29.4425 40.9114L32.5544 44.3267"
              stroke="#202020"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.1"
              d="M1.44482 27.9341L9.29465 36.3637L17.3075 27.7574L25.325 36.3637L33.3696 27.7212"
              stroke="#202020"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.1"
              d="M0.258301 37.3015L1.10534 36.3684L5.23182 40.898L9.27677 36.4635L13.2583 40.83L17.3259 36.3684L21.389 40.83L25.4701 36.3502L29.6147 40.898L33.7639 36.3457L34.4977 37.152"
              stroke="#202020"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.2"
              d="M22.8925 0.45752H26.6068C26.6068 0.45752 26.2761 20.1659 31.4625 37.4328C31.4625 37.4328 29.3381 37.537 28.328 37.8903C27.0371 38.3432 20.7545 18.8115 22.8925 0.45752Z"
              fill="url(#paint1_linear_76_229)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_76_229"
              x1="0.226607"
              y1="32.5"
              x2="34.5203"
              y2="32.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0.1" />
              <stop offset="0.5" stop-opacity="0" />
              <stop offset="1" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_76_229"
              x1="26.9555"
              y1="0.45752"
              x2="26.9555"
              y2="37.8948"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.95" />
              <stop offset="0.12" stop-color="white" stop-opacity="0.78" />
              <stop offset="0.3" stop-color="white" stop-opacity="0.54" />
              <stop offset="0.47" stop-color="white" stop-opacity="0.35" />
              <stop offset="0.63" stop-color="white" stop-opacity="0.2" />
              <stop offset="0.77" stop-color="white" stop-opacity="0.09" />
              <stop offset="0.9" stop-color="white" stop-opacity="0.02" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_76_229">
              <rect width="34.7467" height="65" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "저그",
      detail: "원통 모양의 투박한 맥주잔으로 호프집에서 흔히 볼 수 있는 잔",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="65"
          viewBox="0 0 49 65"
          fill="none"
        >
          <g clip-path="url(#clip0_76_243)">
            <path
              d="M37.5957 59.3381L37.5957 5.6621C37.5957 2.66014 35.1621 0.226563 32.1602 0.226563L5.66191 0.226563C2.65994 0.226563 0.226364 2.66014 0.226364 5.6621L0.226364 59.3381C0.226364 62.34 2.65994 64.7736 5.66191 64.7736H32.1602C35.1621 64.7736 37.5957 62.34 37.5957 59.3381Z"
              fill="url(#paint0_linear_76_243)"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.2"
              d="M13.9285 20.03C13.9285 18.0412 12.3173 16.429 10.3297 16.429C8.34219 16.429 6.73096 18.0412 6.73096 20.03V55.062C6.73096 57.0508 8.34219 58.6631 10.3297 58.6631C12.3173 58.6631 13.9285 57.0508 13.9285 55.062V20.03Z"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.2"
              d="M22.5076 20.03C22.5076 18.0412 20.8964 16.429 18.9088 16.429C16.9213 16.429 15.3101 18.0412 15.3101 20.03V55.062C15.3101 57.0508 16.9213 58.6631 18.9088 58.6631C20.8964 58.6631 22.5076 57.0508 22.5076 55.062V20.03Z"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.2"
              d="M31.0911 20.03C31.0911 18.0412 29.4799 16.429 27.4923 16.429C25.5048 16.429 23.8936 18.0412 23.8936 20.03V55.062C23.8936 57.0508 25.5048 58.6631 27.4923 58.6631C29.4799 58.6631 31.0911 57.0508 31.0911 55.062V20.03Z"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              d="M37.5957 54.3056C41.4731 54.3056 44.6438 50.4554 44.6438 45.7537V28.3282C44.6438 23.6265 41.4731 19.7763 37.5957 19.7763V16.0122C43.3257 16.0122 48.0138 20.7004 48.0138 26.4303V47.6561C48.0138 53.3861 43.3257 58.0742 37.5957 58.0742V54.3101V54.3056Z"
              fill="url(#paint1_linear_76_243)"
              stroke="black"
              stroke-miterlimit="10"
            />
            <path
              opacity="0.2"
              d="M32.3277 0.452881H28.6406V47.5745H32.3277V0.452881Z"
              fill="url(#paint2_linear_76_243)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_76_243"
              x1="37.5957"
              y1="32.5001"
              x2="0.226364"
              y2="32.5001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0.1" />
              <stop offset="0.5" stop-opacity="0" />
              <stop offset="1" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_76_243"
              x1="42.8048"
              y1="58.0697"
              x2="42.8048"
              y2="16.0122"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0.15" />
              <stop offset="0.5" stop-opacity="0" />
              <stop offset="1" stop-opacity="0.15" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_76_243"
              x1="30.4842"
              y1="0.452881"
              x2="30.4842"
              y2="47.5745"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.95" />
              <stop offset="0.12" stop-color="white" stop-opacity="0.78" />
              <stop offset="0.3" stop-color="white" stop-opacity="0.54" />
              <stop offset="0.47" stop-color="white" stop-opacity="0.35" />
              <stop offset="0.63" stop-color="white" stop-opacity="0.2" />
              <stop offset="0.77" stop-color="white" stop-opacity="0.09" />
              <stop offset="0.9" stop-color="white" stop-opacity="0.02" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_76_243">
              <rect width="48.2404" height="65" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const glassButtons = glasses.map((glass) => (
    <IngredientButton.Glass
      key={glass.name}
      id={glass.name}
      icon={glass.icon}
      label={glass.name}
      description={glass.detail}
      value={glass.name}
      checked={selectedGlass == glass.name}
      onChange={() => setSelectedGlass(glass.name)}
    />
  ));

  return (
    <>
      <ProgressBar page={"glass"} />
      <CreateHeader
        title="술잔 선택"
        subTitle="첫 만남부터 지금까지 우리 사이는? (1개 선택)"
        style={{ marginBottom: 20 }}
      />
      {glassButtons}
      <BottomCTA onClick={handleClickCTA} disabled={!selectedGlass}>
        다음
      </BottomCTA>
    </>
  );
};

export default Glass;
