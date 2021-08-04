import Link from "next/link";
import Image from "next/image";
import styles from "styles/dashboard.module.css";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <section className={styles.sidebartop}>
        <Image
          height={68}
          width={68}
          src="/assets/icons/logo.svg" // Route of the image file
          alt="Logo"
          priority
        />
        FACECUP
      </section>
      <section className={styles.linksection}>
        <div>
          {routes.map((e, key) => (
            <div key={key}>
              <Link href={`/dashboard/${e.name}`}>
                <a
                  className={`${styles.navItem} ${
                    router.pathname === `/dashboard/${e.name}`
                      ? styles.activeNavItem
                      : ""
                  }`}
                >
                  <span style={{ paddingRight: 8 }}>{e.title}</span>
                  <Image
                    src={`/assets/icons/${e.icon}.svg`} // Route of the image file
                    height={36} // Desired size with correct aspect ratio
                    width={36} // Desired size with correct aspect ratio
                    alt={`icon`}
                    priority
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <div>
            <Link href={`/dashboard/help`}>
              <a
                className={`${styles.navItem} ${
                  router.pathname === `/dashboard/help`
                    ? styles.activeNavItem
                    : ""
                }`}
              >
                <span style={{ paddingRight: 8 }}>سؤالات متداول</span>
                <Image
                  src={`/assets/icons/faq.svg`} // Route of the image file
                  height={36} // Desired size with correct aspect ratio
                  width={36} // Desired size with correct aspect ratio
                  alt={`icon`}
                  priority
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href={`/dashboard/logout`}>
              <a
                className={`${styles.navItem} ${
                  router.pathname === `/dashboard/logout`
                    ? styles.activeNavItem
                    : ""
                }`}
              >
                <span style={{ paddingRight: 8 }}>خروج</span>
                <Image
                  src={`/assets/icons/logout.svg`} // Route of the image file
                  height={36} // Desired size with correct aspect ratio
                  width={36} // Desired size with correct aspect ratio
                  alt={`icon`}
                  priority
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </aside>
  );
}

const routes = [
  { title: "خانه", name: "", icon: "home" },
  { title: "پروفایل", name: "profile", icon: "user" },
  {
    title: "دریافت محتوا",
    name: "download-content",
    icon: "download-dashboard",
  },
  { title: "ارسال کد", name: "send-code", icon: "code" },
  { title: "نتایج", name: "results", icon: "results" },
  { title: "پشتیبانی", name: "support", icon: "support" },
];
