import React from "react";
import data from "../../data";
import StatisticsList from "./statisticsList/StatisticsList";
import style from "./Statistics.module.css";

const Statistics = () => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>
      <StatisticsList statistics={data.statistics} />
    </section>
  );
};

export default Statistics;
