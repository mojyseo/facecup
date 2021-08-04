import React from "react";
import styles from "./input.module.css";
export default function Index(props) {
  const [focus, setfocus] = React.useState(false);
  const [active, setactive] = React.useState(false);

  return (
    <div
      className={styles.supercontainer}
      style={{ height: props.height && props.height }}
    >
      <div className={styles.inputcontainer}>
        <label
          className={
            focus ? styles.focuslabel : active ? styles.activelabel : null
          }
        >
          {props.label}
        </label>
        <input
          type="text"
          className={focus && styles.focusinput}
          {...props}
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value.length > 0) {
              setactive(true);
            }
            props.onChange && props.onChange(e);
          }}
          onBlur={(e) => {
            setfocus(false);
            if (!e.target.value.length) {
              setactive(false);
            }
          }}
          onFocus={(e) => {
            setactive(true);
            setfocus(true);
          }}
          onLoad={(e) => {}}
        />
        {props.icon && props.icon}
      </div>
      <span style={{ visibility: focus ? "visible" : "hidden" }}>
        {props.info}
      </span>
    </div>
  );
}
