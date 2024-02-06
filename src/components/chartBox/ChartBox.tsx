import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type ChartBoxProps = {
  chartData: {
    title: string;
    color: string;
    key: string;
    data: Array<{ name: string; value: number }>;
  };
};

const ChartBox = (props: ChartBoxProps) => {
  return (
    <div className="chartBox">
      <section className="txt">
        <h1>{props.chartData.title}</h1>
        <p>{"11.2"}</p>
      </section>
      <section className="graph">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={props.chartData.data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={props.chartData.color}
              strokeWidth={2}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ChartBox;
