import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
)
export default App