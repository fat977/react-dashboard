import ChartComponent from "../../../components/ChartComponent";

export default function AreaChart() {

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 5000, 4000, 7000, 2000, 8000],
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color for the area
        tension: 0.4, // Smooth curve
        fill: true, // Enable the area fill
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      title: {
        display: true,
        text: "Revenue Over Time",
      },
    },
   
  };

  return <ChartComponent type="area" data={data} options={options} />;
}
