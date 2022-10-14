import { url } from "inspector";
import styles from "../styles/SelectBackground.module.scss";

export const SelectBackground = ({}: {}) => {
  const images = [
    "https://i.pinimg.com/236x/8e/fa/49/8efa4957ddcdb5732b70432aa333fd6c.jpg",
    "https://i.pinimg.com/236x/8e/fa/49/8efa4957ddcdb5732b70432aa333fd6c.jpg",
    "https://i.pinimg.com/236x/8e/fa/49/8efa4957ddcdb5732b70432aa333fd6c.jpg",
    "https://i.pinimg.com/236x/8e/fa/49/8efa4957ddcdb5732b70432aa333fd6c.jpg",
  ];
  return (
    <>
      {images.map((image) => (
        <div className={styles.cardBox}>
          <div className={styles.selected}>
            <svg xmlns="http://www.w3.org/2000/svg">
              <g mask="url(#mask0_174_177)">
                <path
                  d="M8.76079 16.2973L3.677 11.2135L4.94795 9.94254L8.76079 13.7554L16.9439 5.57227L18.2148 6.84321L8.76079 16.2973Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <img className={styles.cardImg} src={image} alt="배경" />
        </div>
      ))}
    </>
  );
};
