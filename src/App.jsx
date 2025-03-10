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

try{
  const response= await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/2410-FTB-ET-WEB-AM')
  const data = await response.json();
}catch(error){
(console.error())}

function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
     
      <p><Link to="/Books">Available Books</Link></p>
      <p>sosos</p>

    
    
    
          

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <Login />
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

export default App
