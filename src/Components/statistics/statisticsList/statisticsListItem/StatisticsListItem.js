import React from "react";
import PropTypes from "prop-types";
import style from "./StatisticsListItem.module.css";

const StatisticsListItem = ({ statistic }) => {
  const { label, percentage } = statistic;
  return (
    <li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

// ptionalObjectWithStrictShape: PropTypes.exact({
//   name: PropTypes.string,
//   quantity: PropTypes.number,
// })

StatisticsListItem.propTypes = {
  statistic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsListItem;
