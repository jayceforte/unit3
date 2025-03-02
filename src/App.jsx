import { createElement, useState } from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route, Link } from 'react-router-dom'
import Account from './components/Account'
import Books from './components/Books'
import Login from './components/Login'
import Navigations from './components/Navigations'
import Register from './components/Register'
import SingleBook from './components/SingleBook'
import './App.css'
import ReactDOM from 'react-dom/client'
function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <h2>
        <ul>
          <li>
          <a href='Login'>Login</a>
          </li>
          <li><a href='Account'>Account</a></li>
        </ul>
        <li>
          <a href='Books'>Books</a>
        </li>
        <li>
          <a href='Navigations'>Navigations</a>
        </li>
        <a href='SingleBook'>SingleBook</a>
        </h2>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

    
    
    
          

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>
      <Nav />
      <Routes>
        {/* this route defines what the user sees at base url */}
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path="Login" element={<Login />}/>
        <Route path="Register/:if no account" element={<Register />}/>
        <Route path="Account" element={<Account />}/>
        <Route path="Books" element={<Books />}/>
        <Route path="Navigations" element={<Navigations />}/>
        <Route path="SingleBook" element={<SingleBook />}/>
      </Routes>
    </>
  )
}

ReactDOM.root.render(document.getElementById('root')).render
export default App
