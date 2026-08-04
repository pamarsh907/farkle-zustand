import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import { Box } from "@mui/material"
import Footer from '../Footer/Footer'

import { useMediaQuery } from "@mui/material"

export default function Layout() {
  const smallScreen = useMediaQuery('(max-width:600px)')

  const style = {
    margin: smallScreen ? '0px' : '',
    minHeight: '100vh',
    minWidth: '90vw',
    backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    backgroundColor: '#e1f2e0',
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <Box sx={style} className='format'>
      <Header />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }} className='body'><Outlet /></Box>
      <Footer />
    </Box>
  )
}