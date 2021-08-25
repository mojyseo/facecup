import Image from "next/image";
import styles from "styles/landing.module.css";
import VisibilitySensor from "react-visibility-sensor";

export default function Index() {
  return (
    <section id="stats" className="crow">
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
        <div className={styles.stats}>
          <div className={styles.statsitem}>
            <div>50</div>
            <p>بیش از 20 نفر از متخصص ترین منتور ها</p>
          </div>
          <div className={styles.statsitem}>
            <div>50</div>
            <p>بیش از 10 فرصت شغلی در شرکت های معتبر ایران</p>
          </div>
          <div className={styles.statsitem}>
            <div>50</div>
            <p>بیش از 75 میلیون تومان جایزه نقدی</p>
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
}
