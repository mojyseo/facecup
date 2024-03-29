import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/dashboard.module.css";
import Dashboard from "components/dashboard";

const items = [
  {
    text: "دریافت دیتاست نمونه اول",
    link: "/",
  },
  {
    text: "دریافت دیتاست نمونه دوم",
    link: "/",
  },
  {
    text: "دریافت داکرهای تست",
    link: "/",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>FaceCup</title>
      </Head>
      <Dashboard>
        <div className={styles.downloadContentPage}>
          <h2>دریافت محتوای مسابقه</h2>
          <h4>فایل‌های راهنما و دیتاست‌های نمونه جهت آزمایش : </h4>
          <div className="row" style={{ flexWrap: "wrap" }}>
            {items.map((e, key) => (
              <Link href={e.link} key={key}>
                <a className={styles.downloadbtn}>
                  <Image
                    height={24}
                    width={24}
                    src="/assets/icons/download.svg"
                    alt="icon"
                    style={{ marginLeft: 8 }}
                  />
                  <span style={{ marginRight: 8 }}>{e.text}</span>
                </a>
              </Link>
            ))}
          </div>
          <h4>نصب و اجرای داکرهای تست </h4>
          <p>
            برای نصب داکر مراحل لینک زیر دنبال شود
            <Link href="https://docs.docker.com/engine/install/">
              <a>https://docs.docker.com/engine/install/</a>
            </Link>
            در صورتی که از سیستم عامل غیر از ویندوز استفاده می‏شود، باید docker
            compose نیز از لینک زیر نصب شود. در نسخه ویندوزی به صورت پیش فرض
            docker compose نصب شده است.
            <Link href="https://docs.docker.com/compose/install/">
              <a>https://docs.docker.com/compose/install/</a>
            </Link>
            همچنین برای اجرای اسکریپت‏های مورد نیاز در سیستم عامل ویندوز، باید
            از مسیر زیر git نصب شود.
            <Link href="https://git-scm.com/downloads">
              <a>https://git-scm.com/downloads</a>
            </Link>
            پس از نصب موارد بالا، در داخل پوشه docker راست کلیک نموده، سپس بر
            روی git bash here کلیک کرده و درون صفحه باز شده اسکریپت docker.sh را
            همانند شکل زیر اجرا نمایید.
          </p>
          <div style={{ textAlign: "center" }}>
            <Image
              width={882}
              height={560}
              src="/assets/images/download-content1.png"
              alt="download-content1"
            />
          </div>
          <p>
            توجه نمایید که به جای team_name باید اسم لاتین تیم (که در سایت
            ثبت‎‌نام کرده‏اید) و به جای team_pass باید شماره موبایل سرگروه تیم
            را وارد کنید. با این کار در MongoDB پایگاه داده‏ای با نام کاربری اسم
            تیم و رمز عبور شماره موبایل سرگروه ساخته می‎شود. این امر جهت ارزیابی
            نتایج الگوریتم شما بسیار حائز اهمیت است چرا که تیم داوری به داده‏های
            شما با همین نام کاربری و رمز عبور دسترسی خواهد یافت. در صورت بروز هر
            گونه مشکل در وارد کردن این موارد می‎توانید دستور زیر را اجرا کرده و
            سپس دستور start را دوباره اجرا نمایید. ./docker.sh stop برای اطمینان
            از اجرای درست ایمیج‌ها، می‏توانید با استفاده از مرورگر سیستم خود
            آدرس‎های زیر را باز کنید.
            <Link href="http://localhost/images/gallery/images.txt">
              <a>http://localhost/images/gallery/images.txt</a>
            </Link>
            <Link href="http://localhost/images/probe/images.txt">
              <a>http://localhost/images/probe/images.txt</a>
            </Link>
            در این دو آدرس نام تمام فایل‏های عکس probe و gallery آمده است. برای
            مشاهده هر عکس با داشتن اسم آن می‏توانید از آدرس‏های زیر استفاده
            کنید.
            <Link href="http://localhost/images/gallery/S000001.jpg">
              <a>http://localhost/images/gallery/S000001.jpg</a>
            </Link>
            <Link href="http://localhost/images/probe/S000029.jpg">
              <a>http://localhost/images/probe/S000029.jpg</a>
            </Link>
          </p>
          <h4>یک نمونه کد تست جهت کار با داکرها</h4>
          <p>
            در صورت موفقیت در تست مرحله قبل، می ‏توانید کد خود را برای کار با
            ایمیج‌‍‌ها بنویسید. جهت راحتی شما، در پوشه نکسترا تست یک نمونه کد
            پایتون برایبرقراری ارتباط با پایگاه داده ها و دریافت عکس ها نوشته
            شده است
          </p>
          <div style={{ textAlign: "center" }}>
            <Image
              width={1015}
              height={652}
              src="/assets/images/download-content2.png"
              alt="نمونه کد"
            />
          </div>
          <p>
            :برای اجرای این کد باید نکات زیر لحاظ شود در خط 9 به جای nextera_db
            باید اسم لاتین تیم و به جای 1199 باید شماره موبایل سرگروه تیم وارد
            شود. کد فوق بر روی ماشین شما اجرا می‌شود. برای نسخه نهایی کد باید
            localhost را در خط 8 به mongodb و در خطوط 14 و 17 به nginx تغییر
            دهید و برای ساخت ایمیج نهایی از کد خود و ارسال به مسابقه نیز نباید
            از localhost استفاده شود. بنابراین برای حالت تست و بررسی از
            localhost استفاده کنید و برای ساخت ایمیج نهایی، localhost را در خط 8
            به mongodb و در خطوط 14 و 17 به nginx تغییر دهید. قبل از اجرای کد
            تست، دستور زیر را اجرا نمایید تا پیش‎نیاز‎های کد نصب شوند. فرض شده
            است که پایتون نسخه 2 یا 3 قبلا بر روی سیستم شما نصب شده است. pip
            install -r requirements.txt
          </p>
          <h5>تهیه داکر از موتور خودتان جهت ارسال برای مسابقه</h5>
          <p>
            بعد از این که کد خود را نوشتید باید آن را در قالب داکر ایمیج برای
            مسابقه ارسال کنید. برای ساخت داکر ایمیج باید یک Dockerfile فایل
            نوشته شود. در پوشه nextera_test یک نمونه Dockerfile برای ساخت داکر
            ایمیج وجود دارد.
          </p>
          <div style={{ textAlign: "center" }}>
            <Image
              width={624}
              height={242}
              src="/assets/images/download-content3.png"
              alt="نمونه کد"
            />
          </div>
          <p>
            دستور FROM مشخص می‏کند ایمیج از چه ایمیجی پایه‏ای ساخته خواهد شد یا
            اصطلاحا ایمیج بیس ایمیج جدید چه چیزی باشد. در این مثال چون کد نمونه
            به زبان پایتون نوشته شده است، از ایمیج بیس python:3 استفاده شده است.
            از طریق آدرس
            <Link href="https://hub.docker.com">
              <a>https://hub.docker.com</a>
            </Link>
            می‏توانید ایمیج بیس مورد نیاز خود را پیدا نمایید. دستور WORKDIR یک
            دایرکتوری در /usr کانتینر به وجود می‏آورد. همچنین داخل کانتینر
            دایرکتوری را به همین دایرکتوری ساخته شده تغییر می‎دهد و از آن به بعد
            تمام کار‌ها در این دایرکتوری انجام می‎شود. دستور COPY فایل
            requirements.txt را در آدرس /. کپی می‎نماید. این فایل برای نصب
            پیش‎نیاز‌های اجرای کد لازم است. دستور RUN برای اجرای دستورات به کار
            می‏رود. به عنوان مثال، پیش‎نیاز‎ها با اجرای دستور زیر بر روی داکر
            ایمیج نصب می‏شوند. pip install --no-cache-dir -r requirements.txt
            دستور CMD برای اجرای فرمان‌های داکر در زمان آغاز به کار آن است. در
            مثال فوق، می‌خواهیم وقتی داکر ایمیج اجرا شد، اسکریپت ما با استفاده
            از پایتون اجرا شود. بعد از تکمیل فایل داکر، برای ساخت داکر ایمیج
            لازم است دستور زیر را در پوشه شامل فایل داکر اجرا نماییم. docker
            build --tag nextera_test /path/to/dockerfile شما به هنگام ساخت داکر
            ایمیج باید به جای nextera_test از اسم لاتین تیم خود استفاده نمایید
            تا اسم داکر ایمیج اسم تیم خودتان باشد. سپس برای اجرای داکر ایمیج خود
            و ساخته شدن یک کانتینر می‌توانید از دستورات زیر استفاده نمایید. حالت
            تست و آزمایشی (در سیستم خودتان). توجه کنید که در این حالت باید از
            localhost در کد پایتون خود جهت اتصال به سرور و دیتابیس استفاده کنید.
            docker run --name nextera_test1 --network host -d nextera_test ساخت
            ایمیج نهایی و بررسی و ثبت آن. این حالت زمانی است که شما نتایج خود را
            در حالت تست، نهایی کردید و قصد ساخت ایمیج نهایی را دارید. برای ساخت
            ایمیج نهایی، localhost را برای اتصال به سرور به nginx و برای اتصال
            به دیتابیس به mongodb تغییر دهید. docker run --name nextera_test1
            --network docker_default -d nextera_test باید بجای nextera_test از
            اسم تیم خود استفاده نمایید. همچنین می‏توانید به جای nextera_test1 از
            یک اسم دلخواه استفاده نمایید. از اجرای این دستورات برای بررسی درست
            بودن داکر ایمیج خود استفاده نمایید. انتظار ما این است که پس از اجرای
            این دستور برنامه شما درون کانتینر اجرا شده تصاویر را از nginx گرفته
            و هر یک از تصاویر probe را با تمام تصاویر gallery مقایسه نماید و
            نتیجه مقایسه را درون پایگاه داده‏ای به نام اسم تیم شما در MongoDB
            وارد نماید. نمونه کد مربوطه در شکل بخش دوم آمده است. فراموش نکنید که
            برای دسترسی به nginx بر روی سیستم خود از آدرس localhost و پورت 80
            استفاده نمایید و برای دسترسی به MongoDB از آدرس localhost و پورت
            27017 استفاده نمایید. نهایتا برای ذخیره کردن ایمیج نهایی خود به صورت
            یک فایل از دستور زیر استفاده کنید. docker save -o team_name.tar
            team_name مقادیر team_name را با نام تیم خود جایگزین کنید. اجرای
            دستور فوق یک فایل با نام team_name.tar در محل فعلی ایجاد می‌کند که
            در آن ایمیج team_name ذخیره شده است. بعد از آرگومان –o می‌توانید
            آدرس دلخواهی برای ذخیره ایمیج تعیین کنید.
          </p>
        </div>
      </Dashboard>
    </>
  );
}
