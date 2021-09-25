import React from "react";
import Description from "./description/Description";
import StatsList from "./statsList/StatsList";
import { profile } from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={profile}>
      <Description user={user} />

      <StatsList user={user} />
    </div>
  );
};

export default Profile;
