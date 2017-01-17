import React from 'react'
import getAllCats from '../api/getAllCats'

module.exports = ({state, dispatch}) => {
  getAllCats(dispatch)
  console.log('this is the state',state);
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
