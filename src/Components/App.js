import React from "react";
import data from "../data";
import Friends from "./friends/Friends";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transactions/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      <Statistics title="Upload stats" statistics={data.statistics} />
      <Friends friends={data.friends} />
      <TransactionHistory transactions={data.transactions} />
    </>
  );
};

export default App;
