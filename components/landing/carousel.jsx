import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/landing.module.css";
import Fetch from "components/fetch";
import img1 from "public/assets/images/carousel1.png";
import img2 from "public/assets/images/carousel2.png";
import img3 from "public/assets/images/carousel3.png";
import Carousel from "react-slick";
import a from "public/assets/words/stroke/A.svg";
import c from "public/assets/words/stroke/C.svg";
import e from "public/assets/words/stroke/E.svg";
import f from "public/assets/words/stroke/F.svg";
import p from "public/assets/words/stroke/P.svg";
import u from "public/assets/words/stroke/U.svg";

import aF from "public/assets/words/fill/A.svg";
import cF from "public/assets/words/fill/C.svg";
import eF from "public/assets/words/fill/E.svg";
import fF from "public/assets/words/fill/F.svg";
import pF from "public/assets/words/fill/P.svg";
import uF from "public/assets/words/fill/U.svg";
import { apiAddressBase } from "common";
const items = [img1, img2, img3];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function Index() {
  console.log(data);
  const [state, setstate] = React.useState(0);
  const [words, setwords] = React.useState([f, a, c, e, c, u, p]);
  const [first, setfirst] = React.useState(false);
  const [data, setData] = React.useState(false);

  React.useEffect(() => {
    let check = document.cookie;
    if (!check) {
      //set delay
      setfirst(true);
      document.cookie = "notfirsttime";
    }
    Fetch.get("slider", (res) => {
      setData(res);
    });
  });
  React.useEffect(() => {
    const counterInterval = setTimeout(
      () => {
        let newwords = words;
        if (state === 0) {
          newwords[state] = fF;
        } else if (state === 1) {
          newwords[state] = aF;
        } else if (state === 2) {
          newwords[state] = cF;
        } else if (state === 3) {
          newwords[state] = eF;
        } else if (state === 4) {
          newwords[state] = cF;
        } else if (state === 5) {
          newwords[state] = uF;
        } else if (state === 6) {
          newwords[state] = pF;
        }
        setwords(newwords);
        if (state < words.length) {
          setstate(state + 1);
        } else {
          var hrs = document.getElementsByClassName("sthr");
          if (hrs.length > 0) {
            for (let i = 0; i < hrs.length; i++) {
              const element = hrs[i];
              element.classList.add("activehr");
              setTimeout(() => {
                document
                  .getElementById("facecup-slick-slider")
                  .classList.add("active-facecup-slick-slider");
                document.getElementById("starter").style.opacity = 0;
                setTimeout(() => {
                  document.getElementById("starter").style.display = "none";
                }, 1000);
                document.getElementById("downbtn").style.opacity = 1;
              }, 600);
            }
          }
        }
      },
      first ? 1400 : 160
    );
    return () => {
      clearInterval(counterInterval);
      setfirst(false);
    };
  }, [state]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section id="carousel" className={styles.carousel}>
      <div id="facecup-slick-slider" className="facecup-slick-slider">
        <Link href={"#about"}>
          <a className={styles.downbtn} id="downbtn">
            <Image
              src="/assets/icons/down.svg"
              width={64}
              height={64}
              alt="down-icon"
            />
          </a>
        </Link>
        <Carousel {...settings}>
          {data.map((e, key) => {
            return (
              <div key={key} className="carousel-image">
                <Image
                  layout="fill"
                  src={apiAddressBase + e.image}
                  alt="carousel-image"
                  objectFit="cover"
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className={styles.starter} id="starter">
        <hr className="sthr" />
        {words.map((e, key) => (
          <Image src={e} alt={key} key={key} />
        ))}
        <hr className="sthr" />
      </div>
    </section>
  );
}
