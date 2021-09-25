import React from "react";
import StatisticsList from "./statisticsList/StatisticsList";
import style from "./Statistics.module.css";

const Statistics = ({ statistics }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>
      <StatisticsList statistics={statistics} />
    </section>
  );
};

export default Statistics;
