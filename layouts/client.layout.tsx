import * as React from 'react'
import Container from '@mui/material/Container'
import Header from '../components/header'
import Footer from '../components/footer'
import Box from '@mui/material/Box'
import { Fab, IconButton } from '@mui/material'
import { ArrowUpward } from '@mui/icons-material'

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
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
        <IconButton
        onClick={() => {
          ref?.current?.scrollIntoView({ behavior: 'smooth' })
        }}
        sx={{ position: 'fixed',  bottom: "10px", right: "10px"}}
      >
        <img src="/svg/component_scroll.svg" alt="up-button"/>
      </IconButton>
      </Box>
      
    </>
  )
}
