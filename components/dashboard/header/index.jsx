import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/dashboard.module.css";

export default function Index() {
  const [state, setstate] = React.useState(false);
  React.useEffect(() => {
    if (state) {
      document.getElementById("headerItems").classList.add("headeritemsshow");
    } else {
      document
        .getElementById("headerItems")
        .classList.remove("headeritemsshow");
    }
  }, [state]);
  return (
    <header className={styles.header}>
      <button onClick={() => setstate(!state)}>
        <div className={styles.headeritem}>نام تیم</div>
        <div className={styles.headeritems} id="headerItems">
          <div className={styles.headeritem}>پروفایل</div>
          <div className={styles.headeritem}>خروج از حساب کاربری</div>
        </div>
        <div className={styles.headerbtnicon}>
          <Image
            src="/assets/icons/arrow-down.svg"
            width={26}
            height={26}
            alt="icon"
            priority
          />
        </div>
        {/* <div>پروفایل</div>
        <div>خروج از حساب کاربری</div> */}
      </button>
    </header>
  );
}
