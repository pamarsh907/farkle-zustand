import { useUser } from "../stores/user"

export default function HomePage() {
  const user = useUser()

  const style={
    height: '400px',
    backgroundColor: 'lightgray'
  }

  return (
    <div style={style}>
      <div>
        { user && <div>{user.username} is logged in!</div>}
      </div>
    </div>
  )
}