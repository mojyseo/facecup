import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import avatar from "public/assets/profile.png";
export default function Index() {
  const [state, setstate] = React.useState(false);
  const chatref = React.useRef();
  React.useEffect(() => {
    if (chatref.current) {
      //   chatref.current.style.opacity = state ? 1 : 0;
      //   chatref.current.style.visibility = state ? "visible" : "hidden";
    }
  }, [state]);
  return (
    <div className={styles.message}>
      <div className={styles.avatar}>
        <Image src={avatar} alt="icon" />
      </div>
      <span>سلام! سوالی دارید؟! خوشحال می‌شویم به شما کمک کنیم</span>
    </div>
  );
}
