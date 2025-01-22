import React from 'react'

const Propsdemo = (props) => {
  return (
    <div>
      <h1>Props Concept</h1>
      <h2>Name: {props.username}</h2>
      <h2>Password: {props.password}</h2>
      <h2>Hobbies: {props.hobbies.join(" , ")}</h2>
      <h2>Address: {props.address}</h2>
      {props.isActive ? <h2>{props.username} is active</h2>:"User is not active"}
    </div>
  )
}

export default Propsdemo

