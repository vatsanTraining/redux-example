import React,{useContext} from 'react'
import { ProfileContext } from './MyContextProvider'

const UserInfo = ({handleChange}) => {

    const user  =useContext(ProfileContext)

  return (
    <div>
                { <h4>User:{user.details.userName.toUpperCase()}</h4>}
                {/* <button onClick={handleChange}>Change</button> */}

    </div>
  )
}

export default UserInfo