import React from "react";
import Image from "next/image";
import styles from "styles/landing.module.css";
import VisibilitySensor from "react-visibility-sensor";
import Fetch from "components/fetch";
import { apiAddressBase } from "common";
export default function Index() {
  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    Fetch.get("slider", (res) => {
      setdata(res);
    });
  });
  function onchange(isVisible) {
    //spawning sponser images by order
    if (("isVisible", isVisible)) {
      const entries = Object.entries(
        document.getElementsByClassName("sponsorimage")
      );
      // orders :
      var first = [2, 5, 10, 11, 17];
      var second = [0, 3, 7, 12, 16];
      var third = [1, 4, 6, 8, 9, 13, 14, 15];
      entries.map((e, key) => {
        if (first.includes(key)) {
          e[1].classList.add("zoomIn");
        }
        if (second.includes(key)) {
          setTimeout(() => {
            e[1].classList.add("zoomIn");
          }, 600);
        }
        if (third.includes(key)) {
          setTimeout(() => {
            e[1].classList.add("zoomIn");
          }, 1400);
        }
      });
    }
  }

  return (
    <section id="sponsors">
      <VisibilitySensor onChange={onchange}>
        <div className={styles.sponsors}>
          <div className={styles.sponsorsec1}>
            {data.map((e, key) => {
              if (key < 8) {
                return (
                  <div className={`${styles.sponsorimg} sponsorimage`}>
                    <Image
                      height={180}
                      width={180}
                      src={apiAddressBase + e.logo}
                      alt="icon"
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.sponsorsec2}>
            {data.map((e, key) => {
              if (key > 7 && key < 10) {
                return (
                  <div className={`${styles.sponsorimg} sponsorimage`}>
                    <Image
                      height={180}
                      width={180}
                      src={apiAddressBase + e.logo}
                      alt="icon"
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.sponsorsec3}>
            <h3>حامیان فیس‌کاپ</h3>
          </div>
          <div className={styles.sponsorsec4}>
            {data.map((e, key) => {
              if (key > 9 && key < 12) {
                return (
                  <div className={`${styles.sponsorimg} sponsorimage`}>
                    <Image
                      height={180}
                      width={180}
                      src={apiAddressBase + e.logo}
                      alt="icon"
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.sponsorsec5}>
            {data.map((e, key) => {
              if (key > 11 && key < 18) {
                return (
                  <div className={`${styles.sponsorimg} sponsorimage`}>
                    <Image
                      height={180}
                      width={180}
                      src={apiAddressBase + e.logo}
                      alt="icon"
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
}
