import styles from "styles/landing.module.css";
import Collapse from "./collapse";

export default function Index({ data }) {
  return (
    <section className={styles.faq}>
      <h3>سؤالات متداول</h3>
      {data.map((e, key) => (
        <Collapse title={e.question} answer={e.answer} index={key} key={key} />
      ))}
    </section>
  );
}
