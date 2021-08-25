import Link from "next/link";
import Image from "next/image";
import styles from "styles/landing.module.css";

export default function Index() {
  return (
    <section dir="rtl" id="about" className={styles.about}>
      <div>
        <h1>فیس کاپ چیست؟</h1>
        <p>
          یکی از راه‌های کشف و شکوفایی استعدادها و همچنین ایجاد محیط رقابتی
          مناسب بین آن ها، برگزاری مسابقات عملی با استانداردهای بین‌المللی است.
          در زمینه بازشناسی چهره، موسسه NIST مسابقات مختلفی را تحت عنوان FRVT
          برگزار می‌کند که امروزه به‌عنوان مرجعی برای رقابت شرکت‌ها و گروه‌های
          تحقیقاتی مختلف در این زمینه شناخته می‌شود. این رویداد به عنوان اولین
          رویداد مشابه FRVT در ایران و بصورت آنلاین و با پشتوانه دانشگاهی در
          کشور برگزار می شود و تمام تیم‏های حقیقی یا حقوقی که در حوزه شناسایی و
          تشخیص چهره کار میکنند می توانند الگوریتم خود را جهت ارزیابی و رتبه
          بندی به این مسابقه ارسال کنند.
        </p>
        <Link href={"/auth/register"}>
          <a
            className="btn1"
            style={{ marginTop: 12, display: "block", width: "fit-content" }}
          >
            همین حالا ثبت نام کنید
          </a>
        </Link>
      </div>
    </section>
  );
}
