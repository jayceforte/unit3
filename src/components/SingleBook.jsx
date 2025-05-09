/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleBook = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`);
        if (!response.ok) throw new Error(`Failed to load book`);
        const result = await response.json();
        setBook(result);
      } catch (err) {
        console.error(err);
        setMessage('Failed to load book details.');
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [bookId]);

  async function handleCheckout() {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage(' You must be logged in to check out a book.');
      return;
    }
  
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      const contentType = response.headers.get('content-type');
  
      if (!response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const errorResult = await response.json();
          throw new Error(errorResult.message || 'Checkout failed.');
        } else {
          throw new Error(`Unexpected response. Status: ${response.status}`);
        }
      }
  
  
      const result = await response.json();
      setMessage(' Book successfully checked out!');
      setBook(prev => ({ ...prev, available: false }));
    } catch (err) {
      console.error('Checkout error:', err);
      setMessage(`❌ ${err.message}`);
    }
  }
  
  if (loading) return <p>Loading book...</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <img
        src={book.coverImage || 'https://via.placeholder.com/100x150?text=No+Cover'}
        alt={`${book.title} cover`}
        width="100"
      />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>

      {book.available && (
        <button onClick={handleCheckout} disabled={!book.available}>
        {book.available ? 'Check Out' : 'Not Available'}
      </button>
      
      )}

      <p style={{ color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</p>
      <Link to="/Books">← Back to Book List</Link>
    </div>
  );
};

export default SingleBook;


