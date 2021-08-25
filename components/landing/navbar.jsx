import Link from "next/link";
import Image from "next/image";
import styles from "styles/landing.module.css";
import { useRouter } from "next/router";
import { landingRoutes } from "routes";

export default function Index() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className="crow reverser">
        <Image
          src={`/assets/icons/logo-colored.png`} // Route of the image file
          height={64} // Desired size with correct aspect ratio
          width={49.59} // Desired size with correct aspect ratio
          alt={`icon`}
          priority
        />
        <div className={styles.links}>
          {landingRoutes.map((e, key) => (
            <div key={key}>
              <Link href={`#${e.name}`}>
                <a className={styles.linkItem}>
                  <span style={{ paddingRight: 8 }}>{e.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.auth}>
        <Link href={"/auth/register"}>
          <a className={styles.btnFill}>ثبت نام تیم‌ها</a>
        </Link>

        <div className={styles.vr}></div>
        <Link href={"/dashboard"}>
          {/* <Link href={"/auth/login"}> */}
          <a className={styles.btn}>ورود</a>
        </Link>
      </div>
    </nav>
  );
}
