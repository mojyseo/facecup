import Head from "next/head";
import Image from "next/image";
import Dashboard from "components/dashboard";
export default function Home() {
  return (
    <div>
      <Head>
        <title>پشتیبانی</title>
      </Head>
      <Dashboard />
      {/* <main></main> */}
    </div>
  );
}
