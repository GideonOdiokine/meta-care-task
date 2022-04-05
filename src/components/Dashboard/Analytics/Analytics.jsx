import React from "react";
import Graph from "../../Dashboard/Graph";
import { LineChartData } from "../../../data/lineChartData";

import "../styles/index.scss";

const index = () => {
  return (
    <div className="analytics">
      <div className="sticky">
        <div className="analytics__container">
          <div className="analytics__top">
            <ul>
              <li>
                <a className="active">Efficiency</a>
              </li>
              <li>
                <a>Volume</a>
              </li>
              <li>
                <a>Customer Satisfaction</a>
              </li>
              <li>
                <a>Backlog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="analytics__content flex">
          <h4>Efficiency Analytics</h4>
          <div className="content">
            <form>
              <div className="form__group">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z"
                    stroke="#A3A3C2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.375 18.375L14.5687 14.5687"
                    stroke="#A3A3C2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input type="text" placeholder="Search" />
              </div>
            </form>
            <div className="select__option">
              <span>Filter Options</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1644 6.74741C13.5771 6.38049 13.6143 5.74842 13.2474 5.33564C12.8805 4.92285 12.2484 4.88567 11.8356 5.25259L13.1644 6.74741ZM8 10L7.33564 10.7474C7.71452 11.0842 8.28548 11.0842 8.66436 10.7474L8 10ZM4.16436 5.25259C3.75158 4.88567 3.11951 4.92285 2.75259 5.33564C2.38567 5.74842 2.42285 6.38049 2.83564 6.74741L4.16436 5.25259ZM11.8356 5.25259L7.33564 9.25259L8.66436 10.7474L13.1644 6.74741L11.8356 5.25259ZM8.66436 9.25259L4.16436 5.25259L2.83564 6.74741L7.33564 10.7474L8.66436 9.25259Z"
                  fill="#060213"
                />
              </svg>
            </div>
            <button>Export</button>
          </div>
        </div>
      </div>
      <div className="analytic__graph">
        <Graph
          header="Average response Time"
          title="Average Response Time"
          body=" 30 Mins"
          title2="Response Time"
          body2="1 Hour 30 Mins"
          boxBg="#f47560"
          data={LineChartData}
        />
        <Graph
          header="Replies per resolution "
          title="Average Replies "
          body=" 30 Mins"
          title2="Response Time"
          body2="1 Hour 30 Mins"
          boxBg="#9467bd"
          data={LineChartData}
        />
        <Graph
          header="Average resolution time"
          title="Average Resolution Rate"
          body="30 Mins"
          title2="Response Time"
          body2="1 Hour 30 Mins"
          boxBg="pink"
          data={LineChartData}
        />
        <Graph
          header="First contact resolution rate"
          title="Average Contact Rate"
          body="30 Mins"
          title2="Response Time"
          body2="1 Hour 30 Mins"
          boxBg="lightblue"
          data={LineChartData}
        />
      </div>
    </div>
  );
};

export default index;
