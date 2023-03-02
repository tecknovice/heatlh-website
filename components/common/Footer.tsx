import * as React from 'react'
import Box from '@mui/material/Box'
import { Button, Container } from '@mui/material'

const pages = [
  { text: '会員登録' },
  { text: '運営会社' },
  { text: '利用規約' },
  { text: '個人情報の取扱について' },
  { text: '特定商取引法に基づく表記' },
  { text: 'お問い合わせ' },
]

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#414141', py: 3, px: 2, mt: 'auto' }}>
      <Container>
        {pages.map((page, index) => (
          <Button
            key={index}
            disableRipple
            sx={{
              my: 2,
              mr: '45px',
              color: 'white',
              fontSize: '11px',
              fontWeight: 300,
              '&:hover': { color: 'primary.main' },
            }}
          >
            {page.text}
          </Button>
        ))}
      </Container>
    </Box>
  )
}
