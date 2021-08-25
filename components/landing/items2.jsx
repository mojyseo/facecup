import Image from "next/image";
import styles from "styles/landing.module.css";
import VisibilitySensor from "react-visibility-sensor";

export default function Index() {
  return (
    <section id="opportunities">
      <div className={styles.items}>
        <VisibilitySensor
          onChange={(isVisible) => {
            console.log(isVisible);
            if (isVisible) {
              document.getElementById("op-item-2").style["-webkit-animation"] =
                "slide-in-left 0.6s forwards ";
              setTimeout(() => {
                document.getElementById("light2").classList.add("lightstart");
              }, 800);
            }
          }}
        >
          <div
            className={styles.item}
            id="op-item-2"
            style={{ flexDirection: "row" }}
          >
            <div className={styles.itemcontentreverse}>
              <h3>شبکه سازی</h3>
              <p>شناسایی استعداد و انتخاب برای شرکت در پروژه های ملی</p>
            </div>
            <div className={styles.itemimg}>
              <Image
                height={261.47}
                width={265.5}
                src="/assets/images/landingitem2.svg"
                alt="icon"
              />
              <div className={styles.light2} id="light2">
                <Image
                  height={240.87}
                  width={113.97}
                  src="/assets/images/light2.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={(isVisible) => {
            console.log(isVisible);
            if (isVisible) {
              document.getElementById("op-item-3").style["-webkit-animation"] =
                "slide-in 0.6s forwards ";
              setTimeout(() => {
                document.getElementById("light3").style.opacity = "1";
              }, 800);
            }
          }}
        >
          <div className={styles.item} id="op-item-3">
            <div className={styles.itemcontent}>
              <h3>رتبه‌بندی</h3>
              <p>
                رتبه بندی و ارائه گواهی رتبه برای الگوریتم و موتور طراحی شده
              </p>
            </div>
            <div className={styles.itemimg}>
              <Image
                height={222.19}
                width={262.48}
                src="/assets/images/landingitem3.svg"
                alt="icon"
              />
              <div className={styles.light3} id="light3">
                <Image
                  height={146.86}
                  width={102.37}
                  src="/assets/images/light3.svg"
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
