import React from "react";
import PropTypes from "prop-types";
import styles from "./StatsList.module.css";

const StatsList = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      {Object.entries(stats).map((item) => (
        <li key={item[0]}>
          <span className={styles.label}>{item[0]}</span>
          <span className={styles.quantity}>{item[1]}</span>
        </li>
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default StatsList;
