import { useUser } from "../stores/user"

export default function HomePage() {
  const user = useUser()

  return (
    <div>
      <h1>
        Home Page!
        { user && <div>{user.username} is logged in!</div>}
      </h1>
    </div>
  )
}