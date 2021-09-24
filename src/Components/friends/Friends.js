import React from "react";
import data from "../../data";
import FriendsItem from "./friendsItem/FriendsItem";

const Friends = () => {
  return (
    <ul className="friend-list">
      {data.friends.map((friend) => (
        <FriendsItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          online={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default Friends;
