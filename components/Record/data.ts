import { LineChartData } from "../common/LineChart"

export const PhotoList = [
    {
      image: '/images/MyRecommend-1.jpg',
      label: 'BODY RECORD',
      buttonText: '自分のカラダの記録',
    },
    {
      image: '/images/MyRecommend-2.jpg',
      label: 'MY EXERCISE',
      buttonText: '自分の運動の記録',
    },
    {
      image: '/images/MyRecommend-3.jpg',
      label: 'MY DIARY',
      buttonText: '自分の日記',
    },
  ]
  
 export const ChartData: { [key: string]: LineChartData } = {
    日: {
      label: ['6日', '7日', '8日', '9日', '10日', '11日', '12日', '1日', '2日', '3日', '4日', '5日'],
      userData: [
        {
          label: 'Dataset 1',
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 247, 107, 111],
          borderColor: 'rgba(255, 204, 33, 1)',
          backgroundColor: 'rgba(255, 204, 33, 1)',
        },
        {
          label: 'Dataset 2',
          data: [86, 114, 282, 350, 411, 502, 635, 809, 47, 140, 370, 526],
          borderColor: 'rgba(143, 233, 208, 1)',
          backgroundColor: 'rgba(143, 233, 208, 1)',
        },
      ],
    },
    週: {
      label: ['6週', '7週', '8週', '9週', '10週', '11週', '12週', '1週', '2週', '3週', '4週', '5週'],
      userData: [
        {
          label: 'Dataset 1',
          data: [86, 114, 111, 133, 221, 783, 478, 107, 111, 106, 106, 107],
          borderColor: 'rgba(255, 204, 33, 1)',
          backgroundColor: 'rgba(255, 204, 33, 1)',
        },
        {
          label: 'Dataset 2',
          data: [502, 35, 209, 86, 114, 282, 350, 411, 47, 140, 370, 526],
          borderColor: 'rgba(143, 233, 208, 1)',
          backgroundColor: 'rgba(143, 233, 208, 1)',
        },
      ],
    },
    月: {
      label: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
      userData: [
        {
          label: 'Dataset 1',
          data: [106, 106, 107, 111, 86, 114, 133, 221, 83, 247, 107, 111],
          borderColor: 'rgba(255, 204, 33, 1)',
          backgroundColor: 'rgba(255, 204, 33, 1)',
        },
        {
          label: 'Dataset 2',
          data: [350, 411, 102, 35, 309, 86, 114, 282, 47, 140, 370, 526],
          borderColor: 'rgba(143, 233, 208, 1)',
          backgroundColor: 'rgba(143, 233, 208, 1)',
        },
      ],
    },
    年: {
      label: ['6年', '7年', '8年', '9年', '10年', '11年', '12年', '1年', '2年', '3年', '4年', '5年'],
      userData: [
        {
          label: 'Dataset 1',
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 248, 107, 111],
          borderColor: 'rgba(255, 204, 33, 1)',
          backgroundColor: 'rgba(255, 204, 33, 1)',
        },
        {
          label: 'Dataset 2',
          data: [86, 114, 282, 350, 411, 502, 635, 809, 947, 142, 370, 567],
          borderColor: 'rgba(143, 233, 208, 1)',
          backgroundColor: 'rgba(143, 233, 208, 1)',
        },
      ],
    },
  }