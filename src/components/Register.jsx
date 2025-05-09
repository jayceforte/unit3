/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });
      const result = await response.json();
      if (result.token) {
        localStorage.setItem('token', result.token);
        setMessage('Account created! You are now logged in.');
      } else {
        setMessage(result.message || 'Registration failed.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong.');
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Sign Up</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}

