import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


export default function GameBoard(props) {
  return (
    <Container maxWidth='sm'>
      GameBoard
      <Card>
        {props.children}
      </Card>
    </Container>
  )
}