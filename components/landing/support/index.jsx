import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import chat from "public/assets/icons/chaticon.svg";
import close from "public/assets/icons/close.svg";
import send from "public/assets/icons/sendicon.svg";
import avatar from "public/assets/profile.png";
import Message from "./message";

export default function Index() {
  const [state, setstate] = React.useState(false);
  const [imagestate, setimagestate] = React.useState(true);
  const chatref = React.useRef();
  const imgref = React.useRef();
  React.useEffect(() => {
    if (chatref.current) {
      chatref.current.style.opacity = state ? 1 : 0;
      imgref.current.style.opacity = 0;
      setTimeout(() => {
        setimagestate(!imagestate);
        imgref.current.style.opacity = 1;
      }, 300);
      chatref.current.style.visibility = state ? "visible" : "hidden";
    }
  }, [state]);
  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={() => setstate(!state)}>
        <div
          ref={imgref}
          className="crow"
          style={{ transition: "all .3s ease-in-out" }}
        >
          {imagestate ? (
            <Image src={close} alt="icon" />
          ) : (
            <Image src={chat} alt="icon" />
          )}
        </div>
      </div>
      <div className={styles.chat} ref={chatref}>
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderContent}>
            <div>پشتیبان</div>
            <sub>
              سعی می‌شود پاسخ‌ها در کوتاه‌ترین زمان و در عرض چند دقیقه باشد
            </sub>
          </div>
          <div className={styles.chatHeaderImg}>
            <Image src={avatar} alt="icon" />
          </div>
        </div>
        <div className={styles.chatPage}>
          <Message />
        </div>
        <div className={styles.chatKeyboard}>
          <input type="text" placeholder="پیام خود را بنویسید" />
          <div className={styles.sentBtn}>
            <Image src={send} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
