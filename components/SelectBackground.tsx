import { url } from "inspector";
import { type } from "os";
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
        <button className={styles.cardBox} type={"button"}>
          <div className={styles.selected}></div>
          <img className={styles.cardImg} src={image} alt="배경" />
        </button>
      ))}
    </>
  );
};
