import { useUser } from "../stores/user"
import { Container, Paper } from "@mui/material"
import { useState, useEffect } from "react"
import { useUserActions } from "../stores/user"
import GameStats from "../components/GameStats/GameStats"

export default function HallOfFamePage() {
  const [games, setGames] = useState([])
  const { fetchAllGames } = useUserActions()

  useEffect(() => {
    const fetchUserGames = async () => {
      const allGames = await fetchAllGames()
      setGames(allGames)
    }
    fetchUserGames()
  }, [setGames, fetchAllGames])

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
        Hall of Fame
        {games && <GameStats games={games} />}
      </Paper>
    </Container>
  )
}