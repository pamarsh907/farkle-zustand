import { Link } from "react-router-dom"
import { useUser } from "../stores/user"
import { useUserActions } from "../stores/user"

export default function HomePage() {
  const user = useUser()
  const { setUser } = useUserActions()

  const handleLogout = () => {
    console.log('logout')
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
    // setBlogs([])
  }

  return (
    <div>
      <h1>
        Home Page!
        { user && <button onClick={handleLogout}>logout</button> }
        { user && <div>{user.username} is logged in!</div>}
        <br/>
        { user && <Link to='/farkle'>Play Farkle'</Link> }
        
        <br/>
        { !user && <Link to='/login'>Login</Link> }
      </h1>
    </div>
  )
}