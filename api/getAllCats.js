const request = require('superagent')

module.exports = (dispatch) => {
  request
    .get('localhost:3000/api/v1/cats')
    .end((err, res) => {
      if (err) return console.log(err)
      dispatch({type: 'GET_ALL_CATS', payload: res.body.cats})
    })
}
