import React from "react";
import Image from "next/image";
import styles from "styles/landing.module.css";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import img1 from "public/assets/icons/statsicon1.svg";
import img2 from "public/assets/icons/statsicon2.svg";
import img3 from "public/assets/icons/statsicon3.svg";

const items = [
  { text: "بیش از 20 نفر از متخصص ترین منتور ها", icon: img1, value: "17" },
  {
    text: "بیش از 10 فرصت شغلی در شرکت های معتبر ایران",
    icon: img2,
    value: "10",
  },
  { text: "بیش از 75 میلیون تومان جایزه نقدی", icon: img3, value: "75" },
];

export default function Index() {
  const [state, setstate] = React.useState(false);
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  if (!state) {
    return (
      <section id="stats" className="crow">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              setstate(true);
            }
          }}
        >
          <div className={styles.stats}>
            {items.map((e, key) => (
              <div className={styles.statsitem} key={key}>
                <div
                  className="crow"
                  style={{
                    fontSize: 48,
                    color: "#001E6C",
                    alignItems: "baseline",
                  }}
                >
                  <Image width={28} height={28} src={e.icon} alt="icon" />
                  <CountUp end={1} duration={2.2} />
                </div>

                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </VisibilitySensor>
      </section>
    );
  } else {
    return (
      <section id="stats" className="crow">
        <VisibilitySensor
          onChange={(isVisible) => {
            console.log(isVisible);
            if (isVisible) {
              setstate(true);
            }
          }}
        >
          <div className={styles.stats}>
            {items.map((e, key) => (
              <div className={styles.statsitem} key={key}>
                <div
                  className="crow"
                  style={{
                    fontSize: 48,
                    color: "#001E6C",
                    alignItems: "baseline",
                  }}
                >
                  <Image width={28} height={28} src={e.icon} alt="icon" />
                  <CountUp end={e.value} duration={2.2} />
                </div>

                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </VisibilitySensor>
      </section>
    );
  }
}
