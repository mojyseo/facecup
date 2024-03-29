import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/dashboard.module.css";
import Dashboard from "components/dashboard";
import Input from "components/inputs/input";
import Upload from "components/inputs/upload";
import UserAdder from "components/dashboard/main/userAdder";
import Usersinfo from "components/dashboard/main/usersinfo";
export default function Home() {
  const [state, setstate] = React.useState(0);

  return (
    <>
      <Head>
        <title>FaceCup</title>
      </Head>
      <Dashboard>
        <h2>اطلاعات تیم</h2>
        <div className="rrow" style={{ alignItems: "start" }}>
          <div className="col" style={{ paddingLeft: "5rem" }}>
            <Input
              label="نام تیم(لاتین)"
              onChange={(e) => console.log(e.target.value)}
              height="68px"
            />
            <Input
              label="نام تیم(فارسی)"
              onChange={(e) => console.log(e.target.value)}
              height="68px"
            />
            <Input
              label="نام سرگروه"
              onChange={(e) => console.log(e.target.value)}
              height="68px"
            />
            <Input
              label="نام خانوادگی سرگروه"
              onChange={(e) => console.log(e.target.value)}
              height="68px"
            />
            <Input
              label="شماره موبایل"
              onChange={(e) => console.log(e.target.value)}
              height="68px"
            />
          </div>
          <div className="col" style={{ alignItems: "start" }}>
            <div className="rrow">
              <p style={{ paddingLeft: 12 }}>رزومه سرگروه</p>
              <Upload />
            </div>
            {/* logic for new user section */}
            {state === 0 ? (
              <Usersinfo setstate={setstate} />
            ) : (
              <UserAdder setstate={setstate} />
            )}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          <button className="btn1">ثبت مشخصات</button>
        </div>
      </Dashboard>
    </>
  );
}
