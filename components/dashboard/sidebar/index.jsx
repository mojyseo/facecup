import Link from "next/link";
import Image from "next/image";
import styles from "styles/dashboard.module.css";
import { useRouter } from "next/router";
import { dashboardRoutes } from "routes";
export default function Index() {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebartop}>
        <Image
          height={68}
          width={68}
          src="/assets/icons/logo.svg" // Route of the image file
          alt="Logo"
          priority
        />
        FACECUP
      </div>
      <div className={styles.linksection}>
        <div>
          {dashboardRoutes.map((e, key) => {
            if (e.name !== "") {
              return (
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
              );
            } else {
              return (
                <div key={key}>
                  <Link href={`/dashboard`}>
                    <a
                      className={`${styles.navItem} ${
                        router.pathname === `/dashboard`
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
              );
            }
          })}
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
      </div>
    </aside>
  );
}
