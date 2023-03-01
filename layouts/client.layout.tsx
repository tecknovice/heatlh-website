import * as React from 'react'
import Container from '@mui/material/Container'
import Header from '../components/header'
import Footer from '../components/footer'
import Box from '@mui/material/Box'

export default function ClientLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: 0
      }}
    >
      <Header />
        {children}
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </Box>
  )
}
