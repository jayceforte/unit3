/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from 'react';
console.log("Rendering real Login.jsx");

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

<h1>Login Page Confirmed</h1>

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }), 
      });

      const result = await response.json();

      if (response.ok && result.token) {
        localStorage.setItem('token', result.token);
        setMessage(' Login successful!');
      } else {
        setMessage(result.message || 'Login failed.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong.');
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
}

