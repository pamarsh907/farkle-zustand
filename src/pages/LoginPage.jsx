import LoginForm from "../components/LoginForm/LoginForm"
import { Container, Paper } from "@mui/material"

export default function LoginPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, ml: 'auto', mr: 'auto', display: 'flex', justifyContent: 'center'}}>
        <LoginForm />
      </Paper>
    </Container>

  )
}