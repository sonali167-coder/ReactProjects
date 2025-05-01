import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>please Login</div>

  return (
    <div>Login Successful 
        <h2>Welcome {user.username}</h2>
        {/* <h3>Your password is {user.password}</h3>
        <button onClick={() => setUser(null)}>Logout</button> */}
    </div>
  )
}

export default Profile