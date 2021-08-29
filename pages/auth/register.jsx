import Head from "next/head";
import Input from "components/inputs/input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Template from "components/auth/template";
import Fetch from "components/fetch";
export default function Register() {
  const { register, handleSubmit } = useForm();

  function submit(data) {
    // Fetch.post("register", data, (res) => {
    //   if (res === "user created") {
    //   }
    // });
  }

  return (
    <div>
      <Head>
        <title>FaceCup</title>
        <meta name="description" content="ثبت نام" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template
        title="ثبت نام"
        type="register"
        dir="r"
        btnText="ثبت نام"
        onSubmit={handleSubmit(submit)}
      >
        <Input
          label="نام تیم (لاتین)"
          {...register("en_name", { required: true })}
          icon={
            <Image
              height={24}
              width={24}
              src="/assets/icons/usercard.svg"
              alt="icon"
            />
          }
          info=" نام لاتین به‌عنوان نام کاربری شما جهت ورود به سیستم درنظر گرفته خواهد شد"
        />
        <Input
          label="نام تیم (فارسی)"
          icon={
            <Image
              height={24}
              width={24}
              src="/assets/icons/usercard.svg"
              alt="icon"
            />
          }
          {...register("fa_name", { required: true })}
        />
        <Input
          label="شماره موبایل"
          type="number"
          icon={
            <Image
              height={24}
              width={24}
              src="/assets/icons/phone.svg"
              alt="icon"
            />
          }
          info="کدفعالسازی و احراز هویت به این شماره ارسال خواهد شد"
          {...register("phone", { required: true })}
        />
      </Template>
    </div>
  );
}
