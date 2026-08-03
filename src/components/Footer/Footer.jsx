import { Container } from "@mui/material"
import { useMediaQuery } from "@mui/material"

export default function Footer() {
//const smallScreen = useMediaQuery('(max-width:600px)')

  const style = {
    height: '30px',
    backgroundColor: '#1976d2',
    //borderWidth: '1px',
    alignItems: 'center',
    justifyContent: 'space-around',
    //opacity: '5',
    fontSize: '8px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column'
  }

  return (

    <div maxWidth="xl" style={style}>
      <div>Pete made this </div>
      <div>
        2026
      </div>
    </div>
  )
}