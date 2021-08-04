import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Dashboard from "components/dashboard";
export default function Home() {
  return (
    <div>
      <Head>
        <title>FaceCup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
      <main></main>
    </div>
  );
}
