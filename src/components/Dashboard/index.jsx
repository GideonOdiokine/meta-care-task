import React from "react";
import Navbar from "../Layout/Navbar";
import Analytics from "./Analytics/Analytics";
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
