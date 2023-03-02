import * as React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'

export default function ClientLayout({ children }: { children?: React.ReactNode }) {
  const ref = React.useRef(null)
  return (
    <>
      <Box
        sx={{
          px: 0,
        }}
      >
        <span id="top" ref={ref}></span>
        <Header />
        {children}
        <Footer />
        <IconButton
          onClick={() => {
            ;(ref?.current as any)?.scrollIntoView({ behavior: 'smooth' })
          }}
          sx={{ position: 'fixed', bottom: '10px', right: '10px' }}
        >
          <img src="/svg/component_scroll.svg" alt="up-button" />
        </IconButton>
      </Box>
    </>
  )
}
