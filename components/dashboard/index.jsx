import Link from "next/link";
import styles from "styles/dashboard.module.css";
import Header from "components/header";
import Sidebar from "./sidebar";
export default function Index({ children }) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardMain}>
        <Header />
        <main>{children}</main>
      </div>
      <Sidebar />
    </div>
  );
}
