import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import { Container } from "@mui/material"

export default function Layout() {
  return (
    <Container>
      <Header/>
      <div className='body'><Outlet /></div>
      <div>Footer</div>
    </Container>
  )
}