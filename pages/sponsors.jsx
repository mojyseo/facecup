import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Navbar from "components/landing/navbar";
export default function Home() {
  return (
    <div id="sponsors">
      <Head>
        <title>FaceCup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
