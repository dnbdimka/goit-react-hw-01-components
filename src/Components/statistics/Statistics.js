import React from "react";
import StatisticsList from "./statisticsList/StatisticsList";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ statistics, title }) => {
  return (
    <section className={style.statistics}>
      {!!title && <h2 className={style.title}>{title}</h2>}
      <StatisticsList statistics={statistics} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Statistics;
