import React from "react";
import data from "../../data";
import FriendsItem from "./friendsItem/FriendsItem";
import styles from "./Friends.module.css";

const Friends = () => {
  return (
    <div className={styles.friendListContainer}>
      <ul className={styles.friendList}>
        {data.friends.map((friend) => (
          <FriendsItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            online={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default Friends;
