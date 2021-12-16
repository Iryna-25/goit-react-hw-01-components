import React from "react";
import PropTypes from "prop-types";
import styles from "./friendList.module.css";
import Item from "./item";

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <Item
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;