const reducer = require( '../reducer')
const test = require( 'tape')

test('testing that get all cats works', t => {
  const initialState = {
    currentPage: '/'
  }

  const expected = {
    currentPage: '/',
    cats: [
      {name: 'jim', description: 'im a cat'},
      {name: 'jim', description: 'im a cat'}
    ]
  }

  const actual = reducer(initialState, {type: 'GET_ALL_CATS', payload:
  [
    {name: 'jim', description: 'im a cat'},
    {name: 'jim', description: 'im a cat'}
  ]
})

  t.deepEqual(actual, expected, 'gets all cats an attaches them to the state')
  t.end()
})
