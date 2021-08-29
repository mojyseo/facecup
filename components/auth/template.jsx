import styles from "styles/auth.module.css";
import Link from "next/link";
import Image from "next/image";
import img from "public/assets/images/authimage.png";
export default function Index({
  title,
  dir,
  btnText,
  type,
  onSubmit,
  children,
}) {
  return (
    <div
      className={`${styles.container} ${
        dir === "r" ? styles.row : styles.rowReverse
      } `}
      style={{}}
    >
      <div className={styles.img}>
        <Image src={img} alt="cover" />
      </div>
      <form onSubmit={onSubmit}>
        <h1>{title}</h1>
        {children}
        {type === "register" && (
          <span className={styles.supbtn}>
            شما با ثبت نام در فیس‌کاپ
            <Link href="">
              <a className={styles.link}>شرایط استفاده از خدمات</a>
            </Link>
            را میپذیرید
          </span>
        )}
        <button className={styles.btn} type="submit">
          {btnText}
        </button>
        {type === "register" && (
          <span className={styles.subbtn}>
            قبلاً ثبت نام کرده‌اید؟
            <Link href="/auth/login">
              <a>وارد شوید</a>
            </Link>
          </span>
        )}
        {type === "login" && (
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
      </form>
    </div>
  );
}
