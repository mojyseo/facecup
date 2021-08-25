import React from "react";
import styles from "styles/landing.module.css";
import lamp from "public/assets/icons/lamp.svg";
import downicon from "public/assets/icons/downicon.svg";
import questionmark from "public/assets/icons/questionmark.svg";
import Image from "next/image";

export default function Collapse({ title, index }) {
  const [open, setopen] = React.useState(false);
  React.useEffect(() => {
    console.log(open);
    if (!open) {
      document
        .getElementById(`collapser-${index}`)
        .classList.remove("collapse");
      document.getElementById(`cii-${index}`).classList.remove("rotate");
    } else {
      document.getElementById(`collapser-${index}`).classList.add("collapse");
      document.getElementById(`cii-${index}`).classList.add("rotate");
    }
  }, [open]);
  function onClick() {
    setopen(!open);
  }
  return (
    <div className={styles.collapseItemContainer}>
      <div
        onClick={onClick}
        className={`${styles.collapseItemHeader} collapse-header`}
      >
        <div className="row">
          <span className={styles.collapseImg}>
            <Image src={questionmark} alt="icon" />
          </span>

          <span>{title}</span>
        </div>
        <span className={`${styles.collapseImg} row`} id={`cii-${index}`}>
          <Image src={downicon} alt="icon" />
        </span>
      </div>
      <div id={`collapser-${index}`} className={styles.collapseItemcontent}>
        <span className={styles.collapseImg}>
          <Image src={lamp} alt="icon" />
        </span>
        <span>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز لورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </span>
      </div>
    </div>
  );
}
