import Link from "next/link";
import Image from "next/image";
import styles from "styles/landing.module.css";
import VisibilitySensor from "react-visibility-sensor";

export default function Index() {
  return (
    <section id="sponsors">
      <VisibilitySensor
        onChange={(isVisible) => {
          console.log(isVisible);
          if (("isVisible", isVisible)) {
            const entries = Object.entries(
              document.getElementsByClassName("sponsorimage")
            );
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
        }}
      >
        <div className={styles.sponsors}>
          <div className={styles.sponsorsec1}>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/1.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/2.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/3.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/4.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/5.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/6.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/7.png"
                alt="icon"
              />
            </div>
          </div>
          <div className={styles.sponsorsec2}>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/12.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/10.png"
                alt="icon"
              />
            </div>
          </div>
          <div className={styles.sponsorsec3}>
            <h3>حامیان فیس‌کاپ</h3>
          </div>
          <div className={styles.sponsorsec4}>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/9.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/8.png"
                alt="icon"
              />
            </div>
          </div>
          <div className={styles.sponsorsec5}>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/16.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/15.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/14.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/4.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/11.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/7.png"
                alt="icon"
              />
            </div>
            <div className={`${styles.sponsorimg} sponsorimage`}>
              <Image
                height={180}
                width={180}
                src="/assets/images/sponsors/13.png"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
}
