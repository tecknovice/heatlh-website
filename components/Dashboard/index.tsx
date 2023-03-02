import { Box, Button } from '@mui/material'
import Head from 'next/head'
import { Container } from '../common/Container'
import ChoiceItem from './ChoiceItem'
import CircleChart from './CircleChart'
import { LineChart } from '../common/LineChart'
import Photo from '../common/Photo'
import { ChartData, MenuList, PhotoList } from './data'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Top page</title>
      </Head>
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
          <LineChart {...ChartData} />
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
          <Photo key={index} image={m.image} label={m.label} width={'24%'} />
        ))}
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

export default Dashboard
