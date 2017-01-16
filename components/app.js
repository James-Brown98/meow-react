import React, { Component } from 'react'

module.exports = ({state, dispatch}) => {
  return (
    <div>
      <h1>meowtown</h1>
      {state.cats.map(cat => {
        return(
          <div>
            <h3>they call me {cat.name}</h3>
            <img src={cat.imageUrl} />
          </div>
        )
      })}
    </div>
  )
}
