
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { phValue } from "../../chemicals";

const Ph = () => {
  return (
    
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={phValue.data}>
          <Line type="monotone" dataKey="ph" stroke="#8884d8" strokeWidth={2} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    
  );
};

export default Ph;
