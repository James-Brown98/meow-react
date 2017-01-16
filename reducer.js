import clone from 'clone'

module.exports = (state, action) => {
  const newState = clone(state)
  const { type, payload } = action
  switch(type){
    case 'INIT':
      return newState
    case 'GET_ALL_CATS':
      newState.cats = payload
      return newState
    default:
      return newState
  }
}
