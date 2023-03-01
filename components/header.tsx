import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Container } from "../lib/styles/Container"

const pages = [
  { icon: <img src="/svg/icon_note.svg" alt="" />, text: '自分の記録' },
  { icon: <img src="/svg/icon_challenge.svg" alt="" />, text: 'チャレンジ' },
  { icon: <img src="/svg/icon_info.svg" alt="" />, text: 'お知らせ' },
]

const settings = ['自分の記録', '体重グラフ', '目標', '選択中のコース', 'コラム一覧', '設定']

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" sx={{ bgcolor: '#414141' }}>
      <Container>
        <Toolbar disableGutters>
          <img src={'/svg/logo.svg'} alt="logo" />

          <Box display={'flex'} sx={{ marginLeft: 'auto' }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                startIcon={page.icon}
                sx={{ my: 2, color: 'white', '&:hover': { color: 'primary.main' } }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              ml: '32px',
              '& .MuiPaper-root.MuiMenu-paper.MuiPaper-root.MuiPopover-paper': { backgroundColor: '#414141' },
            }}
          >
            <Tooltip title="Open Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img src={Boolean(anchorElUser) ? '/svg/icon_close.svg' : '/svg/icon_menu.svg'} alt="menu" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: '35px',
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
