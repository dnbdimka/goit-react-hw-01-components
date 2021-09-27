import React from "react";
import Description from "./description/Description";
import StatsList from "./statsList/StatsList";
import { profile } from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={profile}>
      <Description name={name} avatar={avatar} tag={tag} location={location} />

      <StatsList stats={stats} />
    </div>
  );
};

export default Profile;
