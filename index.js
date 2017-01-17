import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import sheetRouter from 'sheet-router'

import reducer from './reducer'
import App from './components/app'

const main = document.querySelector('main')

const initialState = {
  currentPage: '/'
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
