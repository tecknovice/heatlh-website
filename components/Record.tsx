import { Button, Divider, Typography } from '@mui/material'
import Head from 'next/head'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Container } from './common/Container'
import { LineChart, LineChartData } from './common/LineChart'
import RecordItem from './common/RecordItem'

const PhotoList = [
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

const ChartData: { [key: string]: LineChartData } = {
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
const Record = () => {
  const [chartType, setChartType] = useState('月')
  return (
    <>
     <Head>
        <title>My Record</title>
      </Head>
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          py: '56px',
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        }}
      >
        {PhotoList.map((m, index) => (
          <RecordItem key={index} buttonText={m.buttonText} image={m.image} label={m.label} />
        ))}
      </Container>
      <Container sx={{ bgcolor: '#414141', py: '16px', mb: '56px' }}>
        <Box display="flex">
          <Typography color="common.white" width="70px" mr="20px" fontSize="15px">
            BODY RECORD
          </Typography>
          <Typography color="common.white" fontSize="22px">
            2021.05.21
          </Typography>
        </Box>
        <Box sx={{ height: '304px' }}>
          <LineChart {...ChartData[chartType]} />
        </Box>

        <Box mt={'9px'}>
          <Button
            variant="contained"
            color={chartType === '日' ? 'primary' : 'secondary'}
            sx={{ borderRadius: '11px', mr: '16px', p: '3px 20px' }}
            onClick={() => setChartType('日')}
          >
            日
          </Button>
          <Button
            variant="contained"
            color={chartType === '週' ? 'primary' : 'secondary'}
            sx={{ borderRadius: '11px', mr: '16px', p: '3px 20px' }}
            onClick={() => setChartType('週')}
          >
            週
          </Button>
          <Button
            variant="contained"
            color={chartType === '月' ? 'primary' : 'secondary'}
            sx={{ borderRadius: '11px', mr: '16px', p: '3px 20px' }}
            onClick={() => setChartType('月')}
          >
            月
          </Button>
          <Button
            variant="contained"
            color={chartType === '年' ? 'primary' : 'secondary'}
            sx={{ borderRadius: '11px', mr: '16px', p: '3px 20px' }}
            onClick={() => setChartType('年')}
          >
            年
          </Button>
        </Box>
      </Container>
      <Container sx={{ bgcolor: '#414141', py: '16px', mb: '56px' }}>
        <Box display="flex" mb={2}>
          <Typography color="common.white" width="70px" mr="20px" fontSize="15px">
            MY EXERCISE
          </Typography>
          <Typography color="common.white" fontSize="22px">
            2021.05.21
          </Typography>
        </Box>
        <Box sx={{ height: '200px', overflowY: 'scroll', pr: 5 }}>
          <Box display="flex" sx={{ gap: '5%', flexWrap: 'wrap' }}>
            {new Array(50).fill(1).map((_, index) => (
              <Box key={index} width="47.5%" py={'3px'}>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography color="common.white" fontSize="15px">
                      <span style={{ marginRight: '16px' }}>●</span> 家事全般（立位・軽い）
                    </Typography>
                    <Typography color="primary.main" fontSize="15px" ml="29px">
                      26kcal
                    </Typography>
                  </Box>

                  <Typography color="primary.main" fontSize="15px">
                    10 min
                  </Typography>
                </Box>
                <Divider style={{ backgroundColor: '#777777', height: '1px' }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Container sx={{ mb: '28px', paddingLeft: '0 !important', paddingRight: '0 !important' }}>
        <Typography color="common.black" fontSize="22px">
          MY DIARY
        </Typography>
        <Box display="flex" sx={{ gap: '12px', flexWrap: 'wrap' }}>
          {new Array(8).fill(1).map((_, index) => (
            <Box key={index} width="24%" p={'16px'} sx={{ border: '2px solid #707070', height: '231px' }}>
              <Box>
                <Box>
                  <Typography color="common.black" fontSize="18px" lineHeight={'22px'}>
                    2021.05.21
                  </Typography>
                  <Typography color="common.black" fontSize="18px" lineHeight={'22px'}>
                    23:25
                  </Typography>
                </Box>

                <Box mt={'8px'}>
                  <Typography color="common.black" fontSize="12px" lineHeight={'22px'}>
                    私の日記の記録が一部表示されます <br />
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      <Container sx={{ display: 'flex', justifyContent: 'center', mb: '64px' }}>
        <Button
          variant="contained"
          sx={{
            '&.MuiButtonBase-root.MuiButton-root': {
              background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
              color: 'common.white',
              borderRadius: '5px',
              height: '56px',
              width: '296px',
              fontSize: '18px',
            },
          }}
        >
          記録をもっと見る
        </Button>
      </Container>
    </>
  )
}

export default Record
