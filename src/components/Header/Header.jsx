import { AppBar } from "@mui/material"
import { Container, Toolbar, Typography, Box, IconButton, Menu, Button, Tooltip, Avatar, MenuItem } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu'
import { useUser } from "../../stores/user"
import { useNavigate } from 'react-router-dom'
import { useUserActions } from "../../stores/user"

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const navigate = useNavigate()
  const user = useUser()
  const { setUser } = useUserActions()

  const pages = [
    {
      id: 'howto',
      text: 'How To',
      route: '/how-to'
    },
    {
      id: 'halloffame',
      text: 'Hall of Fame',
      route: '/hall-of-fame'
    },
    {
      id: 'play',
      text: 'Play',
      route: '/farkle'
    },
  ]

  const settings = [
    user && {
      id: 'profile',
      text: 'Profile',
      route: '/profile'
    },
    {
      id: 'loginout',
      text: user ? 'Logout' : 'Login',
      route: user ? '/' : '/login'
    }
  ].filter(Boolean)

  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
    handleCloseUserMenu()
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (

    <AppBar position='static' sx={{ backgroundColor: '#111827', border: '' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component={Link}
            to='/'
            onClick={() => navigate('/')}
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.6rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            FARKLE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem component={Link} to={page.route} key={page.id} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Farkle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={page.route}
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
                <MenuItem component={Link} to={setting.route} key={setting.id} onClick={user && setting.id === 'loginout' ? logout : handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  )
}