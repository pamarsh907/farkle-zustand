import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import MuiStack from '@mui/material/Stack'
import { useUserActions } from '../../stores/user'
import loginService from '../../services/login'
import farkleService from '../../services/game'


const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useUserActions()

  const navigate = useNavigate()

  const login = async () => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
      )
      farkleService.setToken(user.token)

      setUser(user)
      //setNotification(`${username} logged in`)
      //setTimeout(() => {
      //setNotification(null)
      //}, 5000)
      setUsername('')
      setPassword('')

      navigate('/')
    } catch {
      //setErrorMessage('wrong credentials')
      //setTimeout(() => {
      //setErrorMessage(null)
      //}, 5000)
    }
  }

  return (
    <Card variant="outlined" sx={{ width: '100%', maxWidth: 360, padding: 2 }}>
      <Box>
        <h2>Login</h2>
        <form onSubmit={login}>
          <MuiStack spacing={2} direction="column">
            <TextField
              id="outlined-basic"
              label="username"
              variant="outlined"
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              autoComplete='on'
            />
            <Button variant="contained" type="submit">login</Button>
          </MuiStack>
        </form>
      </Box>
    </Card>
  )
}

export default LoginForm