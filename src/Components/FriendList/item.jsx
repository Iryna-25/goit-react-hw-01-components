import React from "react";
import styles from "./friendList.module.css";

const Item = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.isOnline}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
export default Item;