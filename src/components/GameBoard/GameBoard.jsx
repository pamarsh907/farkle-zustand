import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

export default function GameBoard(props) {
  const style = {
    border: 'solid 5px'
  }

  return (
    <Container maxWidth='sm'>
      <Card style={style}>
        {props.children}
      </Card>
    </Container>
  )
}