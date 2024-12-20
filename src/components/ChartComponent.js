import { Line, Bar, Doughnut,Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

export default function ChartComponent({ type, data, options }) {
    // Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,Filler
  );

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} options={options} />;
    case 'area':
        return <Line data={data} options={options} />;
      case 'bar':
        return <Bar data={data} options={options} />;
      case 'doughnut':
        return <Doughnut className="d-flex align-items-center" width={30} height={30} data={data} options={options} />;
    case 'pie':
         return <Pie data={data} options={options} />;
      default:
        return <div>Unsupported chart type</div>;
    }
  };
  return (
    <div>
      {renderChart()}
    </div>
  );
}
