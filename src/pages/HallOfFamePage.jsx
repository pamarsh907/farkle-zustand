import { useUser } from "../stores/user"
import { Container, Paper } from "@mui/material"

export default function HallOfFamePage() {
  const user = useUser()

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
        { user && <div>Welcome, {user.username}!<br/></div> }
        Hall of Fame
      </Paper>
    </Container>
  )
}