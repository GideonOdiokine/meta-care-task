import React from "react";
import Navbar from "./Navbar";
import Analytics from "./Analytics";
import "./styles/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard__section">
      <Navbar />
      <Analytics />
    </div>
  );
};

export default Dashboard;
