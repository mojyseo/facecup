import styles from "styles/auth.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Index({ title, btntext, type, children }) {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: type === "register" ? "row" : "row-reverse" }}
    >
      <Image
        width={627}
        height={584}
        src="/assets/images/authimage.png"
        alt="cover"
        className={styles.img}
      />
      <main>
        <h1>{title}</h1>
        {children}
        {type === "register" && (
          <span className={styles.supbtn}>
            شما با ثبت نام در فیس‌کاپ{" "}
            <Link href="">
              <a>شرایط استفاده از خدمات</a>
            </Link>{" "}
            را میپذیرید.
          </span>
        )}
        <button className={styles.btn}>
          {type === "register" ? "ثبت نام" : "وارد شوید"}
        </button>
        {type === "register" ? (
          <span className={styles.subbtn}>
            قبلاً ثبت نام کرده‌اید؟
            <Link href="/auth/login">
              <a>وارد شوید</a>
            </Link>
          </span>
        ) : (
          <div>
            <div className={styles.subbtn}>
              <Link href="/auth/login">
                <a>رمز عبور خود را فراموش کرده‌اید؟ </a>
              </Link>
            </div>
            <span className={styles.subbtn}>
              هنوز حساب کاربری ندارید؟
              <Link href="/auth/register">
                <a>ثبت نام کن</a>
              </Link>
            </span>
          </div>
        )}
      </main>
    </div>
  );
}
