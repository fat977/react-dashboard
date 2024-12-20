import ChartComponent from "../../../components/ChartComponent";

export default function LineChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Over Time",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgba(75,192,192,1)", // Line color
        backgroundColor: "rgba(75,192,192,0.2)", // Fill color
        fill: true, // Fill the area under the line
      },
    ],
  };

  // Options to configure the chart appearance
  const options = {
    responsive: true, // Make the chart responsive to screen size
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.raw + " units"; // Customizing tooltip
          },
        },
      },
    },
  };
  return <ChartComponent type="line" data={data} options={options} />;
}
