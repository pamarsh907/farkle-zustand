import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import FarkleGamePage from "./pages/FarkleGamePage"
import { useEffect } from 'react'
import { useUserActions } from "./stores/user"
import farkleServcie from "./services/farkle"
import Layout from "./components/Layout/Layout"
import { BrowserRouter as Router } from 'react-router-dom'

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
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='farkle' element={<FarkleGamePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
