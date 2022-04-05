import React from "react";

import { ResponsiveLine } from "@nivo/line";
import Card from "./Analytics/Card";

const Graph = ({ header, title, body, title2, body2, boxBg, data }) => {
  return (
    <div className="graph__content">
      <div className="graph__container">
        <div className="graph">
          <div className="top">
            <h3>
              {header} <span>+4.14% </span>
            </h3>
            <div className="left">
              <div>
                <span className="box" style={{ backgroundColor: boxBg }}></span>
                <span>High Priority</span>
              </div>
              <div className="select__option">
                <span>This Month</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3334 2.66653V1.99992C11.3334 1.63173 11.6319 1.33325 12.0001 1.33325C12.3683 1.33325 12.6668 1.63173 12.6668 1.99992V2.66653H13.3334C14.438 2.66653 15.3334 3.56196 15.3334 4.66653V6.66653V7.99986V11.3332C15.3334 13.5423 13.5425 15.3332 11.3334 15.3332H4.66672C2.45758 15.3332 0.666718 13.5423 0.666718 11.3332V7.99986V6.66653V4.66653C0.666718 3.56196 1.56215 2.66653 2.66672 2.66653H3.99999V1.99992C3.99999 1.63173 4.29847 1.33325 4.66666 1.33325C5.03485 1.33325 5.33333 1.63173 5.33333 1.99992V2.66653H11.3334ZM1.99999 7.99986V11.3331C1.99999 12.8059 3.1939 13.9998 4.66666 13.9998H11.3333C12.8061 13.9998 14 12.8059 14 11.3331V7.99986H1.99999ZM2.66666 3.9998H3.99999V3.99992C3.99999 4.36811 4.29847 4.66659 4.66666 4.66659C5.03485 4.66659 5.33333 4.36811 5.33333 3.99992V3.9998H11.3334V3.99992C11.3334 4.36811 11.6319 4.66659 12.0001 4.66659C12.3683 4.66659 12.6668 4.36811 12.6668 3.99992V3.9998H13.3333C13.7015 3.9998 14 4.29828 14 4.66647V6.66647H1.99999V4.66647C1.99999 4.29828 2.29847 3.9998 2.66666 3.9998Z"
                    fill="#060213"
                  />
                </svg>
              </div>
            </div>
          </div>
          <ResponsiveLine
            colors={boxBg}
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{ tickSize: 0, tickPadding: 13 }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            enableGridX={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[]}
          />
        </div>
        <div className="card__container">
          <Card title={title} body={body} />
          <Card title={title2} body={body2} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
