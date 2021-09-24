import React from "react";
import PropTypes from "prop-types";
import style from "./FriendsItem.module.css";

const FriendsItem = ({ online, avatar, name }) => {
  return (
    <li className={style.item}>
      <span className={online ? style.online : style.offline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default FriendsItem;
