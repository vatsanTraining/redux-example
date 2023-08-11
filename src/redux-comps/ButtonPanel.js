import React from 'react'

const ButtonPanel = ({changeFirstName,changeLastName}) => {
  return (
    <div>
        <button onClick={changeFirstName}>FirstName</button>
        <button onClick={changeLastName}>LastName</button>

    </div>
  )
}

export default ButtonPanel