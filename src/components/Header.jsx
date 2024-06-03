import * as React from 'react'
import logo from '../assets/image/logo.svg'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'
import { styled, alpha } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const pages = [
  { name: 'Home', path: '/home' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const navigate = useNavigate()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid rgba(207, 207, 207, 1)',
    borderRadius: theme.shape.borderRadius,
    color: 'rgba(207, 207, 207, 207)',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    width: '100%',
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  }))
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }))
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch'
        }
      }
    }
  }))
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    toast.success('Log out success')
  }
  return (
    <AppBar
      position="static" sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', boxShadow: 0, my: 1, padding: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Avatar alt="Logo Reactjs" src={logo}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="rgba(0, 167, 180, 1)"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick = { () => {
                    handleCloseNavMenu,
                    navigate(page.path)
                  }}>
                  <Typography textAlign="center"
                    sx={{
                      fontSize: '1rem',
                      '&:hover': {
                        color: 'rgba(35, 187, 134, 1)'
                      }
                    }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' }
          }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick = { () => {
                  handleCloseNavMenu,
                  navigate(page.path)
                }}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontSize: '19px',
                  lineHeight: '28px',
                  textTransform: 'none',
                  '&:hover': {
                    color: 'rgba(35, 187, 134, 1)'
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Stack direction="row" spacing={3} alignItems="center">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search posts…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Button
              variant="contained"
              onClick={() => handleLogout()}
              sx={{
                background: 'linear-gradient(to right, rgba(0, 167, 180, 1), rgba(164, 217, 108, 1))',
                color: 'white', whiteSpace: 'nowrap'
              }}>
              Sign Out
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
