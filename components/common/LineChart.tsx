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

ChartJS.defaults.backgroundColor = '#9BD0F5'
ChartJS.defaults.borderColor = '#fff'
ChartJS.defaults.color = '#fff'

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

export interface IDataType {
  label: string
  data: number[]
  borderColor: string
  backgroundColor: string
}

export interface LineChartData {
  label: string[]
  userData: IDataType[]
}
export function LineChart({ label, userData }: LineChartData) {
  const data = {
    labels: label,
    datasets: userData,
  }
  return <Line options={options} data={data} />
}
