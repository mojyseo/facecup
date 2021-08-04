import React from "react";
import Image from "next/image";
import styles from "./upload.module.css";
export default function Index(props) {
  const [focus, setfocus] = React.useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <span style={{ paddingLeft: 10 }}>برای انتخاب فایل کلیک کنید</span>{" "}
        <Image
          width={24}
          height={24}
          src="/assets/icons/upload.svg"
          alt="icon"
        />
        <input className={styles.input} type="file" name="" id="" />
      </button>
    </div>
  );
}
