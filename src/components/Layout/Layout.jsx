import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import { Container } from "@mui/material"
import Footer from '../Footer/Footer'

import { useMediaQuery } from "@mui/material"

export default function Layout() {
  const smallScreen = useMediaQuery('(max-width:600px)')

  const style = {
    margin: smallScreen ? '0px' : '',
    minHeight: '100vh',
    minWidth: '90vw'
  }

  return (
    <div style={style} class='format'>
      <Header/>
      <div className='body'><Outlet /></div>
      <Footer/>
    </div>
  )
}