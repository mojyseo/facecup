import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/dashboard.module.css";
import Dashboard from "components/dashboard";
export default function Home() {
  const [time, settime] = React.useState(500);

  return (
    <div>
      <Head>
        <title>FaceCup</title>
      </Head>
      <Dashboard>
        <div className={styles.countdown}>
          <div className="crow">
            <div className={styles.countdownitem}>
              <span>دقیقه</span>
              <div>00</div>
            </div>
            <div className={styles.countdownitem}>
              <span>ساعت</span>
              <div>00</div>
            </div>
            <div className={styles.countdownitem}>
              <span>روز</span>
              <div>00</div>
            </div>
            <div className={styles.countdownitem}>
              <span>ماه</span>
              <div>00</div>
            </div>
          </div>
          <span style={{ padding: 10 }}>مانده تا اعلام نتایج</span>
        </div>
      </Dashboard>
    </div>
  );
}
