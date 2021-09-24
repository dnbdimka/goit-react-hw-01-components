import React from "react";
import Friends from "./friends/Friends";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transactions/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <Friends />
      <TransactionHistory />
    </>
  );
};

export default App;
