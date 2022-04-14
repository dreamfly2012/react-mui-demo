import React from 'react'
import ReactDOM from 'react-dom'
import { Nav } from './components/Nav'
import { BrowserRouter } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import "./main.css"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />

      <BottomNav />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
