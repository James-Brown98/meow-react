import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import sheetRouter from 'sheet-router'

import reducer from './reducer'
import App from './components/app'

const main = document.querySelector('main')

const initialState = {
  currentPage: '/',
  cats: [
    {name: 'fizz', age: 2, description: 'im a cat', imageUrl: 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg', lives: 10},
    {name: 'jim', age: 3, description: 'cats are cool', imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQodQEqiu0r3eGFJ_zHaOqZ8oWtXMDn8AIOdyw4mCiVerbA571zQ', lives: 10}
  ]
}

const { dispatch, getState, subscribe } = createStore(reducer, initialState)

const route = sheetRouter({default: '/404'}, [
    ['/', (params) => App]
])

subscribe(() => {
  const currentPage = getState().currentPage
  var Component = route(currentPage)
  render(<Component state={getState()} dispatch={dispatch} />, main)
})

dispatch({type: 'INIT'})
