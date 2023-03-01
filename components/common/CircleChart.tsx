import { styled, Typography } from '@mui/material'

const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '40px',
  width: '40px',
  textAlign: 'center',
  transform: 'scale(2.5)',
  '& .countdown-number': {
    color: 'white',
    display: 'inline-block',
    lineHeight: '35px',
  },

  '& .svg': {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '40px',
    height: '40px',
    transform: 'rotateY(0deg) rotateZ(-90deg)',
  },

  '& .circle': {
    strokeLinecap: 'round',
    strokeWidth: '0.5px',
    stroke: 'white',
    fill: 'none',
  },
}))

const CircleChart = ({ percentage }: { percentage: number }) => {
  return (
    <Wrapper>
      <div className="countdown-number">
        <Typography component="span" fontSize="4px" mr={"1px"}>
          05/21
        </Typography>
        <Typography component="span" fontSize="6px">
          {percentage}%
        </Typography>
      </div>
      <svg className="svg">
        <circle
          className="circle"
          r="18"
          cx="20"
          cy="20"
          style={{ strokeDasharray: '113', strokeDashoffset: `${(percentage / 113) * 100}%` }}
        ></circle>
      </svg>
    </Wrapper>
  )
}

export default CircleChart
