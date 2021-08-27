import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/landing.module.css";
import Navbar from "components/landing/navbar";
import Carousel from "components/landing/carousel";
import Sponsors from "components/landing/sponsors";
import About from "components/landing/about";
import Items from "components/landing/items";
import Items2 from "components/landing/items2";
import Stats from "components/landing/stats";
import Faq from "components/landing/faq";
import Footer from "components/landing/footer";
import Support from "components/landing/support";
import { FullPage, Slide } from "react-full-page";

const description =
  "یکی از راه‌های کشف و شکوفایی استعدادها و همچنین ایجاد محیط رقابتی مناسب بین آن ها، برگزاری مسابقات عملی با استانداردهای بین‌المللی است. در زمینه بازشناسی چهره، موسسه NIST مسابقات مختلفی را تحت عنوان FRVT برگزار می‌کند که امروزه به‌عنوان مرجعی برای رقابت شرکت‌ها و گروه‌های تحقیقاتی مختلف در این زمینه شناخته می‌شود. ";

export default function Home() {
  //this component uses an slider with different slide componnets

  return (
    <div className={styles.container}>
      <Head>
        <title>FaceCup | فیس‌کاپ</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <FullPage>
        <Slide>
          <Navbar />
          <Carousel />
        </Slide>
        <Slide>
          <About />
        </Slide>
        <Slide>
          <Items />
        </Slide>
        <Slide>
          <Items2 />
        </Slide>
        <Slide>
          <Sponsors />
        </Slide>
        <Slide>
          <Stats />
        </Slide>
        <Slide>
          <Faq />
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
      <Support />
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
