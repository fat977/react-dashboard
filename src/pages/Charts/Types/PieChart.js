import ChartComponent from "../../../components/ChartComponent";

export default function PieChart() {

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["red", "blue", "yellow"],
        hoverOffset: 4,
      },
    ],
  };
  return <ChartComponent type="pie" data={data} height={278} />;
}
