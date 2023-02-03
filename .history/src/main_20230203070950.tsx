import React from 'react'
import { Browser } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store'
import {Provider} from 'react-redux'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
