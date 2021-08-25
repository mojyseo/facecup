import Link from "next/link";
import Image from "next/image";
import styles from "styles/landing.module.css";
import { landingRoutes } from "routes";

export default function Index() {
  return (
    <section className={styles.footer}>
      <div style={{ position: "relative" }}>
        <hr />

        <span className={styles.footertitle}>FACECUP</span>
      </div>
      <div className={styles.footerrow}>
        <div className={styles.footercol}>
          <div>
            <strong>نشانی :</strong> تهران، بالاتراز تقاطع خیابان کارگرشمالی
            وخیابان جلال آل احمد، پردیس فنی دانشگاه تهران، ساختمان مکانیک قدیم،
            مرکز نوآوری نکسترا
          </div>
          <div>
            <strong>شماره تماس:</strong>
            91090395-021
          </div>
        </div>
        <div className={styles.footercol}>
          <span className={styles.footericon}>
            <Image
              height={36}
              width={36}
              src="/assets/icons/instagram.svg"
              alt="icon"
            />
          </span>
          <div className={styles.footervr}></div>
        </div>
        <div className={styles.footercol}>
          {landingRoutes.map((e, key) => (
            <div key={key}>
              <Link href={`/${e.name}`}>
                <a className={styles.linkItem}>
                  <span style={{ paddingRight: 8 }}>{e.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <form className={styles.footerform}>
        <input type="email" placeholder="آدرس ایمیل خود را وارد کنید" />
        <button type="submit" className={styles.btnFill}>
          عضویت در خبرنامه
        </button>
      </form>
      <div style={{ textAlign: "center" }}>
        © ۱۳۹9 | تمامی حقوق این وب سایت متعلق به فیس‌کاپ می باشد. | Powered by
        facecup
      </div>
    </section>
  );
}
