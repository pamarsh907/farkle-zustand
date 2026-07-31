import Card from '@mui/material/Card'
import Container from '@mui/material/Container'

export default function GameBoard(props) {
  const style = {
    border: 'solid 5px',
    //backgroundColor: 'brown'
  }

  return (
    <Container className='gameboard' maxWidth='sm'>
      <Card style={style}>
        {props.children}
      </Card>
    </Container>
  )
}