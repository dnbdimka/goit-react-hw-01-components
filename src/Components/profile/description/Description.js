import React from "react";
import PropTypes from "prop-types";
import styles from "./Description.module.css";

const Description = ({ avatar, name, tag, location }) => {
  return (
    <div className={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
        width="200"
      />

      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Description;
