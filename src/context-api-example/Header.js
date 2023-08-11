import React, { useContext } from 'react'
import { ProfileContext } from './MyContextProvider'
import UserInfo from './UserInfo'

const Header = () => {
    const user  =useContext(ProfileContext)

    const handleChange =()=>{
       user.setDetails((prevState) =>({...prevState,isLogged:!prevState.isLogged}))
    }
  return (
    <div>
        {/* <UserInfo handleChange={handleChange}></UserInfo> */}
        <UserInfo></UserInfo>
        { <h1>Header :{user.details.userName}</h1>}
     {   user.details.isLogged?<p>Guest User</p> :<p>Registred User</p>
}
<button onClick={handleChange}>Change</button>

    </div>
  )
}

export default Header