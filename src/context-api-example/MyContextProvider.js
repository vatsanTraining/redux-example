
import React, { createContext, useState } from 'react'
import Header from './Header'
export const  ProfileContext = createContext({})

const MyContext = () => {
    const currentUser = {userName: 'John', isLogged: false}
     const[details,setDetails]  =useState(currentUser);

  return (
    <ProfileContext.Provider value={{details,setDetails}}>
        <Header></Header>
    </ProfileContext.Provider>
  )
}

export default MyContext