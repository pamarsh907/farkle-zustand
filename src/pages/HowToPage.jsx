import { List, ListItem, ListItemText, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider } from "@mui/material"
import { Typography } from "@mui/material"

export default function HowToPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          How to Play
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Farkle is a fast-paced dice game where players try to score points by
          rolling six dice and setting aside scoring combinations. The first player
          to reach the target score wins.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Objective
        </Typography>

        <Typography paragraph>
          Be the first player to reach <strong>10,000 points</strong>.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Turn Overview
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Roll all six dice." />
          </ListItem>

          <ListItem>
            <ListItemText primary="Set aside any dice that score points." />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Choose whether to:"
              secondary={
                <>
                  • <strong>Bank</strong> your points and end your turn.
                  <br />
                  • <strong>Keep Rolling</strong> the remaining non-scoring dice to
                  try for more points.
                </>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="If every die you rolled scored, you have Hot Dice."
              secondary="Pick up all six dice and continue rolling to score even more points."
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="If a roll contains no scoring dice, you Farkled."
              secondary="Your turn ends immediately and you lose all unbanked points earned during that turn."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Scoring
        </Typography>

        <TableContainer component={Paper} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: "grey.100" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Combination</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Points</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>Single 1</TableCell>
                <TableCell>100</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Single 5</TableCell>
                <TableCell>50</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Three 1s</TableCell>
                <TableCell>1,000</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Three of any other number</TableCell>
                <TableCell>Face value × 100 (e.g. three 4s = 400)</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Four of a kind</TableCell>
                <TableCell>1,000</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Five of a kind</TableCell>
                <TableCell>2,000</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Six of a kind</TableCell>
                <TableCell>3,000</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Straight (1-2-3-4-5-6)</TableCell>
                <TableCell>1,500</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Three pairs</TableCell>
                <TableCell>1,500</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Two triplets</TableCell>
                <TableCell>2,500</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Four of a kind + a pair</TableCell>
                <TableCell>1,500</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Important Rules
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="You must set aside at least one scoring die after every roll." />
          </ListItem>

          <ListItem>
            <ListItemText primary="Once a die has been set aside for scoring, it cannot be rolled again unless you earn Hot Dice." />
          </ListItem>

          <ListItem>
            <ListItemText primary="Points are only added to your total after you choose to bank them." />
          </ListItem>

          <ListItem>
            <ListItemText primary="If you Farkle before banking, all points earned during that turn are lost." />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Winning the Game
        </Typography>

        <Typography paragraph>
          The first player to reach or exceed <strong>10,000 points </strong>
          triggers the final round. Each remaining player gets one last turn to beat
          the leading score. The player with the highest score at the end wins.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Example Turn
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 3,
            bgcolor: "grey.50",
          }}
        >
          <Typography paragraph>
            <strong>1.</strong> You roll: <strong>1, 1, 5, 3, 4, 6</strong>.
          </Typography>

          <Typography paragraph>
            <strong>2.</strong> You keep the two 1s (200 points) and the 5 (50
            points).
          </Typography>

          <Typography paragraph>
            <strong>3.</strong> You have 250 unbanked points and roll the remaining
            three dice.
          </Typography>

          <Typography>
            <strong>4.</strong> You can continue risking your points or bank the 250
            points and end your turn.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  )
}