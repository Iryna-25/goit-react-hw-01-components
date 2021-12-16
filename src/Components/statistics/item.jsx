import React from "react";
import styles from "./Statistics.module.css";

const Item = ({ name, value }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{name}</span>
      <span className={styles.percentage}>{value}</span>
    </li>
  );
};

export default Item;