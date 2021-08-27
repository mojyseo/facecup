import Head from "next/head";
import Image from "next/image";
import styles from "styles/dashboard.module.css";
import Dashboard from "components/dashboard";
export default function Home() {
  return (
    <div>
      <Head>
        <title>FaceCup</title>
      </Head>
      <Dashboard>
        <h2>سلام تیم فلان عزیز</h2>
        <p>
          شما میتوانید پس از تکمیل ثبت نام در قسمت پروفایل، فایل‌های راهنما و
          داده‌های نمونه را دانلود کنید. پس از نهایی سازی کدهای خود تا تاریخ ۱۵
          بهمن ماه فرصت دارید که فایل‌های موتور خود را در قالب داکر با فرمت مشخص
          شده در بخش قوانین فنی از طریق بخش ارسال کد ارسال فرمایید. تا قبل از
          ساعت ۲۴ تاریخ روز ۱۴ بهمن ماه ۱۴۰۰ می‌توانید به دفعات کد خود را حذف و
          ویرایش نمایید. ولی در این تاریخ دسترسی بسته خواهد. شد و آخرین کد شما
          جهت ارزیابی با داده‌های واقعی روی سیستم مشخص شده اجرا و نتایج آن مورد
          ارزیابی قرار می‌گیرد. پس از بررسی تمامی کدهای ارسال شده تمامی تیم‌ها،
          نتایج تیم شما از طریق دکمه مشاهده نتایج رتبه‌بندی قابل دسترس خواهد
          بود. همچنین جهت دریافت گواهی شرکت در مسابقه و گواهی رتبه نیز در تاریخ
          مشخص شده می‌توانید به قسمت نتایج پنل کاربری مراجعه فرمایید
        </p>

        <div className={`rrow ${styles.customrow}`}>
          <div>
            <h4>مشخصات سیستم مورد استفاده برای مسابقات :</h4>
            <div className="crow">
              <div className={styles.detailsitem}>
                <Image
                  height={38}
                  width={38}
                  src="/assets/icons/cpu.svg"
                  alt="icon"
                />
                <span>Core i7 3.2GHz</span>
              </div>
              <div className={styles.detailsitem}>
                <Image
                  height={38}
                  width={38}
                  src="/assets/icons/gpu.svg"
                  alt="icon"
                />
                <span>Geforce 1080</span>
              </div>
              <div className={styles.detailsitem}>
                <Image
                  height={38}
                  width={38}
                  src="/assets/icons/ram.svg"
                  alt="icon"
                />
                <span>16G</span>
              </div>
            </div>
          </div>
          <div>
            <Image
              width={589}
              height={332}
              src="/assets/images/video.png"
              alt="icon"
            />
          </div>
        </div>

        <p>جهت آشنایی با قوانین فنی و نحوه استفاده از داکرها کلیک کنید</p>
      </Dashboard>
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
