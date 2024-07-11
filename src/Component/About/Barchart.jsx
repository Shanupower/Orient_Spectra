import { BarChart } from "@mui/x-charts/BarChart";

export default function BarLabel() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: [ 2018, 2019, 2020, 2021, 2022, 2023,2024],
        },
      ]}
      series={[{ data: [436, 572, 628, 451, 743, 1132, 1395] }]}
      height={340}
      barLabel="value"
    />
  );
}
