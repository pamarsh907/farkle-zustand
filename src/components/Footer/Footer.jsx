import { useMediaQuery } from "@mui/material"

export default function Footer() {
  const smallScreen = useMediaQuery('(max-width:600px)')

  const style = {
    height: '30px',
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '8px',
    color: 'white',
    display: smallScreen ? 'none' : 'flex',
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