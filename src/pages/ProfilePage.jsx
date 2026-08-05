import { useUser } from "../stores/user"
import { Container, Paper } from "@mui/material"
import { useUserActions } from "../stores/user"
import { useEffect, useState } from "react"
import GameStats from "../components/GameStats/GameStats"

export default function ProfilePage() {
  const [games, setGames] = useState([])
  const user = useUser()
  const { fetchGames } = useUserActions()

  useEffect(() => {
    if (user) {
      const fetchUserGames = async () => {
        const userGames = await fetchGames(user.id)
        setGames(userGames)
        console.log('userGames :', userGames)
      }
      fetchUserGames()
    }

  }, [setGames, fetchGames, user])

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
        {user && <div>Welcome, {user.username}!<br /></div>}
        Game History
        <br />
        {games && <GameStats games={games}/>}
      </Paper>
    </Container>
  )
}