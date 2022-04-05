import React from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard/index";
import Sidebar from "./components/Layout/Sidebar";

const App = () => {
  return (
    <main>
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default App;
