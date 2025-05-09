import { useEffect, useState } from 'react';

export default function Account() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in.');
        return;
      }

      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Unauthorized or failed to fetch user info.');
        }

        const result = await response.json();
        setUser(result);
      } catch (err) {
        console.error('Failed to fetch user info', err);
        setError('Could not load user info.');
      }
    }

    fetchUserData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading your account...</p>;

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/Login'; 
        }}
      >
        Log Out
      </button>
    </div>
  );
}
