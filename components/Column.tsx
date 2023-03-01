import { Box, Button, Divider, Typography } from '@mui/material'
import { Container } from '../lib/styles/Container'
import Photo from './common/Photo'

const PhotoList = [
  {
    image: '/images/column-1.jpg',
    label: '2021.05.17   23:25',
  },
  {
    image: '/images/column-2.jpg',
    label: '2021.05.17   23:25',
  },
  {
    image: '/images/column-3.jpg',
    label: '2021.05.17   23:25',
  },
  {
    image: '/images/column-1.jpg',
    label: '2021.05.17   23:25',
  },
  {
    image: '/images/column-1.jpg',
    label: '2021.05.17   23:25',
  },
  {
    image: '/images/column-2.jpg',
    label: '2021.05.17   23:25',
  },
  {
    image: '/images/column-3.jpg',
    label: '2021.05.17   23:25',
  },
  {
    image: '/images/column-1.jpg',
    label: '2021.05.17   23:25',
  },
]
const HeadList = [
  {
    label: 'RECOMMENDED COLUMN',
    sublabel: 'オススメ',
  },
  {
    label: 'RECOMMENDED DIET',
    sublabel: 'ダイエット',
  },
  {
    label: 'RECOMMENDED BEAUTY',
    sublabel: '美容',
  },
  {
    label: 'RECOMMENDED HEALTH',
    sublabel: '健康',
  },
]

const Column = () => {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
      
          py: '56px',
        }}
      >
        {HeadList.map((data, index) => (
          <Box
            key={index}
            width={'23%'}
            height="144px"
            sx={{ bgcolor: '#2e2e2e' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent={'center'}
          >
            <Typography color="primary.main" width="200px" fontSize="22px" fontWeight="400" textAlign={'center'}>
              {data.label}
            </Typography>
            <Divider sx={{ width: '56px', bgcolor: 'common.white', my: '10px' }} />
            <Typography color="common.white" fontSize="18px" fontWeight="300" mt={'5px'}>
             {data.sublabel}
            </Typography>
          </Box>
        ))}
      </Container>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          
          flexWrap: 'wrap',
          mb: '25px',
        }}
      >
        {PhotoList.map((m, index) => (
          <Box width={'24.5%'} mb={'10px'} key={index}>
            <Photo  image={m.image} label={m.label} width={'100%'} height={'144px'} />
            <Typography color="common.black" fontSize="15px" fontWeight="300" mt={'5px'}>
              魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
            </Typography>
            <Box display={'flex'}>
              <Button
                variant="text"
                color="primary"
                sx={{ '&.MuiButtonBase-root.MuiButton-root': { padding: '0px', width: 'fit-content' } }}
              >
                #魚料理
              </Button>
              <Button variant="text" color="primary">
                #和食
              </Button>
              <Button variant="text" color="primary">
                #DHA
              </Button>
            </Box>
          </Box>
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

export default Column
