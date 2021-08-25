import React from "react";

import Image from "next/image";
import styles from "styles/landing.module.css";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

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
            console.log(isVisible);
            if (isVisible) {
              setstate(true);
            }
          }}
        >
          <div className={styles.stats}>
            <div className={styles.statsitem}>
              <CountUp end={1} duration={2.2} />

              <p>بیش از 20 نفر از متخصص ترین منتور ها</p>
            </div>
            <div className={styles.statsitem}>
              <CountUp end={1} duration={2.2} />

              <p>بیش از 10 فرصت شغلی در شرکت های معتبر ایران</p>
            </div>
            <div className={styles.statsitem}>
              <CountUp end={1} duration={4} />

              <p>بیش از 75 میلیون تومان جایزه نقدی</p>
            </div>
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
            <div className={styles.statsitem}>
              <CountUp start={1} end={20} duration={4} />

              <p>بیش از 20 نفر از متخصص ترین منتور ها</p>
            </div>
            <div className={styles.statsitem}>
              <CountUp start={1} end={10} duration={4} />

              <p>بیش از 10 فرصت شغلی در شرکت های معتبر ایران</p>
            </div>
            <div className={styles.statsitem}>
              <CountUp start={1} end={75} duration={4} />

              <p>بیش از 75 میلیون تومان جایزه نقدی</p>
            </div>
          </div>
        </VisibilitySensor>
      </section>
    );
  }
}
