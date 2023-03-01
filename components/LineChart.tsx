import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Colors)

ChartJS.defaults.backgroundColor = '#9BD0F5';
ChartJS.defaults.borderColor = '#fff';
ChartJS.defaults.color = '#fff';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478,107, 111,],
      borderColor: 'rgba(255, 204, 33, 1)',
      backgroundColor: 'rgba(255, 204, 33, 1)',
    },
    {
      label: 'Dataset 2',
      data: [86, 114, 282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      borderColor: 'rgba(143, 233, 208, 1)',
      backgroundColor: 'rgba(143, 233, 208, 1)',
    },
  ],
}

export function LineChart() {
  return <Line options={options} data={data}/>
}
