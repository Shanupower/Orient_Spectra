import { BarChart } from "@mui/x-charts/BarChart";

export default function BarLabel() {
  return (
    <BarChart
      series={[{ data: [436, 572, 628, 451, 743, 1132, 1395] }]}
      height={300}
      barLabel="value"
    />
  );
}
