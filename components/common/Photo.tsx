import { Box, Typography } from '@mui/material'

const Photo = ({
  image,
  label,
  width = '243px',
  height = '200px',
}: {
  image: string
  label: string
  width?: string
  height?: string
}) => {
  return (
    <Box
      height={height}
      width={width}
      sx={{
        overflow: 'hidden',
        position: 'relative',
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
      <Box sx={{ bgcolor: 'primary.light', position: 'absolute', bottom: 0, left: 0, p: '7px 8px' }}>
        <Typography sx={{ color: 'common.white' }}>{label}</Typography>
      </Box>
    </Box>
  )
}

export default Photo
