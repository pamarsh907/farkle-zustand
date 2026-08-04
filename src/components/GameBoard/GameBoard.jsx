import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import { useMediaQuery } from '@mui/material'

export default function GameBoard(props) {
  const smallScreen = useMediaQuery('(max-width:600px)')

  const style = {
    border: 'solid 3px',
    borderColor: 'darkgray',
  }

  return (
    <Container
      className='gameboard'
      maxWidth='md'
      sx={{
        px: smallScreen ? 0 : 2,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
    >
      <Card
        style={style}
        sx={{
          border: "solid 3px",
          borderColor: "darkgray",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0
        }}
      >
        {props.children}
      </Card>
    </Container>
  )
}