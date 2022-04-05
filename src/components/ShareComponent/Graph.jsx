import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { LineChartData } from "../../data/lineChartData";

const Graph = () => {
  return (
    <div className="graph__content">
      <div className="graph__container">
        <ResponsiveLine
          data={LineChartData}
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
    </div>
  );
};

export default Graph;
