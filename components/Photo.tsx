import { Box, Typography } from '@mui/material'

const Photo = ({image, label}: {image: string, label: string}) => {
  return (
    <Box
      height="243px"
      width="243px"
      sx={{
        overflow: 'hidden',
        position: "relative"
      }}
    >
      <Box
        height="100%"
        width="100%"
        sx={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          transform: 'scale(1.5)',
        }}
      ></Box>
      <Box sx={{ bgcolor: 'primary.light', position: "absolute", bottom: 0, left: 0, p: "7px 8px" }}>
        <Typography sx={{ color: 'common.white' }}>{label}</Typography>
      </Box>
    </Box>
  )
}

export default Photo
