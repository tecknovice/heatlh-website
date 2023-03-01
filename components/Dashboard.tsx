import { Box, Button, CircularProgress } from '@mui/material'
import { url } from 'inspector'
import { Container } from '../lib/styles/Container'
import ChoiceItem from './common/ChoiceItem'
import CircleChart from './common/CircleChart'
import { LineChart } from './common/LineChart'
import Photo from './common/Photo'

const MenuList = [
  {
    icon: '/svg/icon_knife.svg',
    label: 'Morning',
  },
  {
    icon: '/svg/icon_knife.svg',
    label: 'Lunch',
  },
  {
    icon: '/svg/icon_knife.svg',
    label: 'Dinner',
  },
  {
    icon: '/svg/icon_cup.svg',
    label: 'Snack',
  },
]

const PhotoList = [
  {
    image: '/images/m01.jpg',
    label: '05.21.Morning',
  },
  {
    image: '/images/m02.jpg',
    label: '05.21.Lunch',
  },
  {
    image: '/images/m03.jpg',
    label: '05.21.Dinner',
  },
  {
    image: '/images/m01.jpg',
    label: '05.21.Snack',
  },
  {
    image: '/images/m01.jpg',
    label: '05.20.Morning',
  },
  {
    image: '/images/m02.jpg',
    label: '05.20.Lunch',
  },
  {
    image: '/images/m03.jpg',
    label: '05.20.Dinner',
  },
  {
    image: '/images/m01.jpg',
    label: '05.21.Snack',
  },
]

const ChartData = {
    label: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    userData: [
        {
          label: 'Dataset 1',
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478, 107, 111],
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
const Dashboard = () => {
  return (
    <>
      <Box display="flex">
        <Box
          height="316px"
          width="40%"
          sx={{
            overflow: 'hidden',
          }}
        >
          <Box
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/images/d01.jpg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              transform: 'scale(2)',
            }}
          >
            <CircleChart percentage={75} />
          </Box>
        </Box>
        <Box display="flex" height="316px" width="60%" justifyContent={'center'} py={2} sx={{ bgcolor: '#2E2E2E' }}>
          <LineChart {...ChartData}/>
        </Box>
      </Box>
      <Container sx={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: '84px', py: '25px' }}>
        {MenuList.map((m, index) => (
          <ChoiceItem key={index} icon={m.icon} label={m.label} />
        ))}
      </Container>
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          py: '25px',
        }}
      >
        {PhotoList.map((m, index) => (
          <Photo key={index} image={m.image} label={m.label} />
        ))}
      </Container>
      <Container sx={{ display: 'flex', justifyContent: 'center', mb: "64px" }}>
        <Button
          variant="contained"
          sx={{
            '&.MuiButtonBase-root.MuiButton-root': {
              background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
              color: 'common.white',
              borderRadius: "5px",
              height: "56px",
              width: "296px",
              fontSize: "18px"
            },
          }}
        >
          記録をもっと見る
        </Button>
      </Container>
    </>
  )
}

export default Dashboard
