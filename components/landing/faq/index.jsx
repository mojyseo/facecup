import React from "react";

import styles from "styles/landing.module.css";
import Collapse from "./collapse";
import Fetch from "components/fetch";

export default function Index() {
  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    Fetch.get("slider", (res) => {
      setdata(res);
    });
  });
  return (
    <section className={styles.faq}>
      <h3>سؤالات متداول</h3>
      {data.map((e, key) => (
        <Collapse title={e.question} answer={e.answer} index={key} key={key} />
      ))}
    </section>
  );
}
