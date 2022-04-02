import React from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <main>
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default App;
