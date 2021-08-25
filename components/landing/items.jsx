import Image from "next/image";
import styles from "styles/landing.module.css";
import VisibilitySensor from "react-visibility-sensor";

export default function Index() {
  return (
    <section id="opportunities">
      <div className={styles.banner}>
        <div>
          <span>زمان برگزاری مسابقه</span>
          <span> 15 بهمن ماه 1400</span>
        </div>
        <p>مسابقه به‌صورت مجازی برگزار خواهد شد</p>
      </div>
      <div className={styles.items}>
        <VisibilitySensor
          onChange={(isVisible) => {
            console.log(isVisible);
            if (isVisible) {
              document.getElementById("op-item-1").style["-webkit-animation"] =
                "slide-in 0.6s forwards ";
              setTimeout(() => {
                document.getElementById("light1").classList.add("lightstart");
              }, 800);
            }
          }}
        >
          <div className={styles.item} id="op-item-1">
            <div className={styles.itemcontent}>
              <h3>فرصت‌های شغلی</h3>
              <p>ارتباط با شرکت های مطرح در این حوزه و موقعیت های شغلی متعدد</p>
            </div>
            <div className={styles.itemimg}>
              <Image
                height={270}
                width={270}
                src="/assets/images/landingitem1.svg"
                alt="icon"
              />
              <div className={styles.light} id="light1">
                <Image
                  height={147.34}
                  width={115.04}
                  src="/assets/images/light.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    </section>
  );
}
