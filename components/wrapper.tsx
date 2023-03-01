import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import React from 'react'
import useUser from '../hooks/useUser'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { loading } = useUser()
  if (loading) return null
  const mdTheme = createTheme({
    palette: {
      primary: {
        main: "#FF963C",
        dark: "#EA6C00",
        light: "#FFCC21",
        contrastText: "#000"
      },
      secondary: {
        main: "#8FE9D0"
      }
    }
  });
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
