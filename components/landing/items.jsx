import Image from "next/image";
import styles from "styles/landing.module.css";
import VisibilitySensor from "react-visibility-sensor";
import img1 from "public/assets/images/landingitem1.svg";
import light1 from "public/assets/images/light.svg";

//items part 1
export default function Index() {
  return (
    <section id="items1">
      <div className={styles.banner}>
        <div>
          <span>زمان برگزاری مسابقه</span>
          <span> آذر - بهمن ماه 1400</span>
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
              <Image src={img1} alt="icon" />
              <div className={styles.light} id="light1">
                <Image src={light1} alt="icon" />
              </div>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    </section>
  );
}
