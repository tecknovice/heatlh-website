import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const mdTheme = createTheme({
    palette: {
      primary: {
        main: '#FF963C',
        dark: '#EA6C00',
        light: '#FFCC21',
        contrastText: '#fff',
      },
      secondary: {
        main: '#fff',
        contrastText: '#FF963C',
      },
    },
  })
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
