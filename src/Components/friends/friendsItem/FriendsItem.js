import React from "react";
import PropTypes from "prop-types";

const FriendsItem = ({ online, avatar, name }) => {
  return (
    <li className="item">
      <span className="status">{online}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default FriendsItem;
