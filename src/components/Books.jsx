import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Books() {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        if (!response.ok) throw new Error(`Could not fetch books: ${response.status}`);
        const result = await response.json();
        setBooks(result);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(true);
      }
    }

    fetchBooks();
  }, []);

  if (error) return <p>Error loading books.</p>;
  if (!books) return <p>Loading books...</p>;

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (book.genre && book.genre.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h2>Books</h2>

      <input
        type="text"
        placeholder="Filter by title, author, or genre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '100%', maxWidth: '400px', marginBottom: '20px' }}
      />

      {filteredBooks.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredBooks.map(book => (
            <li key={book.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <img
  src={book.coverImage || 'https://via.placeholder.com/100x150?text=No+Cover'}
  alt={`${book.title} cover`}
  width="100"
/>

              <div>
                <Link to={`/books/${book.id}`}>
                  <strong>{book.title}</strong> by {book.author}
                </Link>
                <p>{book.genre}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books match your search.</p>
      )}
    </div>
  );
}



