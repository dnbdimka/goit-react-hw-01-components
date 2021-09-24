import React from "react";
import data from "../../data";
import Description from "./description/Description";
import StatsList from "./statsList/StatsList";
import { profile } from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={profile}>
      <Description user={data.user} />

      <StatsList user={data.user} />
    </div>
  );
};

export default Profile;
