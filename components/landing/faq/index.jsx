import Link from "next/link";
import Image from "next/image";
import styles from "styles/landing.module.css";
import Collapse from "./collapse";
export default function Index() {
  return (
    <section className={styles.faq}>
      <h3>سؤالات متداول</h3>
      <Collapse
        title="چگونه می‌توان اعتبار حساب کاربری خود را افزایش داد؟"
        index={0}
        key={0}
      />
      <Collapse
        title="چگونه می‌توان اعتبار حساب کاربری خود را افزایش داد؟"
        index={1}
        key={1}
      />
      <Collapse
        title="چگونه می‌توان اعتبار حساب کاربری خود را افزایش داد؟"
        index={2}
        key={2}
      />
      <Collapse
        title="چگونه می‌توان اعتبار حساب کاربری خود را افزایش داد؟"
        index={3}
        key={3}
      />
      <Collapse
        title="چگونه می‌توان اعتبار حساب کاربری خود را افزایش داد؟"
        index={4}
        key={4}
      />
    </section>
  );
}
