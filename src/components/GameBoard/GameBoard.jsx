import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import { useMediaQuery } from '@mui/material'

export default function GameBoard(props) {
  const smallScreen = useMediaQuery('(max-width:600px)')

  const style = {
    border: 'solid 3px',
    borderColor: 'darkgray',
    //height: '90dvh'
  }

  const gameboardStyle = {
    paddingLeft: smallScreen ? '0px' : '16px',
    paddingRight: smallScreen ? '0px' : '16px'
  }

  return (
    <Container className='gameboard' maxWidth='sm' style={gameboardStyle}>
      <Card style={style}>
        {props.children}
      </Card>
    </Container>
  )
}