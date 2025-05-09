import bookLogo from './assets/books.png';
import { Routes, Route, Link } from 'react-router-dom';
import Account from './components/Account';
import Books from './components/Books';
import Login from './components/Login';
import Navigations from './components/Navigations';
import Register from './components/Register';
import SingleBook from './components/SingleBook';
import './index.css';

function App() {
  return (
    <>
      <h1><img id='logo-image' src={bookLogo} alt="logo" />Library App</h1>

      <nav>
        <p><Link to="/Books">Available Books</Link></p>
        <p><Link to="/Login">Login</Link></p>
        <p><Link to="/Register">Register</Link></p>
        <p><Link to="/Account">Account</Link></p>
      </nav>

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Navigations" element={<Navigations />} />
        <Route path="/books/:bookId" element={<SingleBook />} />
      </Routes>
    </>
  );
}

export default App;
