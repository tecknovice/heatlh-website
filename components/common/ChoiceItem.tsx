import { Box, styled, Typography } from '@mui/material'

const Hexagon = styled('div')(({ theme }) => ({
  width: '134px',
  height: '134px',
  background: 'linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%)',
  '-webkit-clip-path': 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
  clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
  transform: 'rotate(270deg)',
}))

const ChoiceItem = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <Hexagon style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box display="flex" flexDirection="column" alignItems={'center'} style={{ transform: 'rotate(90deg)' }}>
        <img src={icon} alt="menu-icon" width="56px" height="56px" />
        <Typography sx={{ color: 'common.white' }} fontSize="20px">
          {label}
        </Typography>
      </Box>
    </Hexagon>
  )
}

export default ChoiceItem
