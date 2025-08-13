'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  labels: string[];
  data: number[];
  colors: string[];
}

export default function DoughnutChart({ labels, data, colors }: Props) {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false, // We'll do a custom one below
      },
    },
  };

  return (
    <div className="bg-transparent p-4 rounded-xl w-full max-w-sm mx-auto">
      <div className="relative h-[250px] w-[250px] mx-auto">
        <Doughnut data={chartData} options={options} />
      </div>

      {/* <div className="mt-6 space-y-2">
        {labels.map((label, i) => (
          <div key={label} className="flex justify-between items-center text-white bg-neutral-900 p-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: colors[i] }} />
              <span className="text-sm">{label}</span>
            </div>
            <span className="text-sm font-semibold">{data[i].toLocaleString()}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}
