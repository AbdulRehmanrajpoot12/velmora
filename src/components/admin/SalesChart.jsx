import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 200 },
  { name: "May", sales: 600 },
  { name: "Jun", sales: 800 },
  { name: "July", sales: 400 },
  { name: "Aug", sales: 300 },
  { name: "Sep", sales: 500 },
  { name: "Oct", sales: 200 },
  { name: "Nov", sales: 600 },
  { name: "Dec", sales: 800 },
];

const SalesChart = () => {
  return (
    <div className="w-full min-w-0 h-62.5 sm:h-75 lg:h-100 p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
