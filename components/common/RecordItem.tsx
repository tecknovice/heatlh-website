import { Box, Button, Typography } from '@mui/material'

const RecordItem = ({ buttonText, image, label }: { buttonText: string; image: string; label: string }) => {
  return (
    <Box
      height="288px"
      width="288px"
      sx={{
        overflow: 'hidden',
        border: '24px solid',
        borderColor: 'primary.light',
        position: 'relative',
      }}
    >
      <Box
        height="100%"
        width="100%"
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
          transform: 'scale(1.5)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '30%',
          mr: 'auto',
          ml: 'auto',
          p: '7px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          color="primary.light"
          fontSize="25px"
          fontWeight={400}
          sx={{ textTransform: 'uppercase' }}
          gutterBottom
        >
          {label}
        </Typography>
        <Button variant="contained" color="primary" sx={{ width: '170px' }}>
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}

export default RecordItem
