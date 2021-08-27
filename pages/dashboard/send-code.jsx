import React from "react";
import Head from "next/head";
import Image from "next/image";
import Upload from "components/inputs/upload";
import styles from "styles/dashboard.module.css";
import Dashboard from "components/dashboard";
export default function Home() {
  const [file, setfile] = React.useState(null);

  return (
    <div>
      <Head>
        <title>FaceCup</title>
      </Head>
      <Dashboard>
        <h2>ارسال کد</h2>

        {file ? (
          <div className={styles.fileuploaded}>
            <div>
              <div className="row">
                <Image
                  width={24}
                  height={24}
                  src="/assets/icons/file.svg"
                  alt="icon"
                />
                <div
                  className="col"
                  style={{ paddingRight: 12, alignItems: "start" }}
                >
                  <div>file_name.tar</div>
                  <div style={{ color: "gray" }}>23:11 - 1400/04/21</div>
                </div>
              </div>
            </div>
            <div className="col">
              <Image
                width={16}
                height={16}
                src="/assets/icons/delete.svg"
                alt="icon"
                className="iconbtn"
              />
              <div style={{ paddingTop: 10 }}></div>
              <Image
                width={16}
                height={16}
                src="/assets/icons/refresh.svg"
                alt="icon"
                className="iconbtn"
              />
            </div>
          </div>
        ) : (
          <div className="row" style={{ alignItems: "baseline" }}>
            <span style={{ paddingLeft: 8 }}>فایل داکر</span>
            <Upload />
          </div>
        )}

        <h4>توجه :</h4>
        <p>
          فایل انتخابی باید با فرمت .tar باشد تا قبل از ساعت ۲۴ تاریخ روز ۱۴
          بهمن ماه ۱۴۰۰ می‌توانید به دفعات کد خود را حذف و ویرایش نمایید آخرین
          کد شما جهت ارزیابی مورد بررسی قرار می‌گیرد
        </p>
        <br />
        <button className="btn1">ارسال کد</button>
      </Dashboard>
    </div>
  );
}
