'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useRef, useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  labels: string[];
  data: number[];
}

export default function BarChart({ labels, data }: Props) {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    // Apply gradient fill
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#3b82f6'); // blue-500
    gradient.addColorStop(1, '#60a5fa'); // blue-400

    chart.data.datasets[0].backgroundColor = gradient;
    chart.update();
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Teams',
        data,
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
          maxRotation: 90,
          minRotation: 45,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#ccc',
        },
        grid: {
          color: '#333',
        },
      },
    },
  };

  return (
    <div className="bg-transparent p-4 rounded-xl w-full h-[400px]">
      <Bar ref={chartRef} data={chartData} options={options} />
    </div>
  );
}
