import ChartComponent from "../../../components/ChartComponent";


export default function BarChart() {

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales ($)",
        data: [12000, 19000, 3000, 5000, 20000, 3000],
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Bar border color
        borderWidth: 1, // Width of bar borders
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top", // Position of the legend
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure Y-axis starts from zero
      },
    },
  };

  return <ChartComponent type="bar" options={options} data={data} />;
}
