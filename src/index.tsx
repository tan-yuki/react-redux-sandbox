import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootElement
)
