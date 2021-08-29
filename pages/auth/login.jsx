import Head from "next/head";
import Input from "components/inputs/input";
import Image from "next/image";
import styles from "styles/auth.module.css";
import Template from "components/auth/template";
export default function Home() {
  function submit(e) {
    e.preventDefault();
    const data = {
      en_name: e.target[0].value,
    };
    console.log(data);
  }
  return (
    <div>
      <Head>
        <title>ورود</title>
        <meta name="description" content="وروود" />
      </Head>
      <Template title="ورود" type="login" btnText="ورود" onSubmit={submit}>
        <Input
          label="نام کاربری (نام لاتین تیم)"
          onChange={(e) => console.log(e.target.value)}
          icon={
            <Image
              height={24}
              width={24}
              src="/assets/icons/usercard.svg"
              alt="user icon"
            />
          }
          height="56px"
        />
        <Input
          label="کلمه عبور"
          icon={
            <Image
              height={24}
              width={24}
              src="/assets/icons/key.svg"
              alt="password icon"
            />
          }
          type="password"
        />
      </Template>
    </div>
  );
}
