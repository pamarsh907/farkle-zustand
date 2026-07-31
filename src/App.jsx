import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import FarkleGamePage from "./pages/FarkleGamePage"
import { useEffect } from 'react'
import { useUserActions } from "./stores/user"
import farkleServcie from "./services/farkle"

function App() {
  const { setUser } = useUserActions()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      farkleServcie.setToken(user.token)
    }
  }, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/farkle' element={<FarkleGamePage/>} />
    </Routes>
    </>
  )
}

export default App
