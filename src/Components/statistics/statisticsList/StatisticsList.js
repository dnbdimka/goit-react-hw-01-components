import React from "react";
import StatisticsListItem from "./statisticsListItem/StatisticsListItem";
import PropTypes from "prop-types";
import style from "./StatisticsList.module.css";

const StatisticsList = ({ statistics }) => {
  return (
    <ul className={style.stat_list}>
      {statistics.map((statistic) => (
        <StatisticsListItem key={statistic.id} statistic={statistic} />
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StatisticsList;
