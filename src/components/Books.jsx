/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [laoding, setLoading] = useState(true);
    const [error, setError] = useState(null);
}
useEffect (() => {
    setLoading(true);
    fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
    .then((response) => {
        if(!response.ok) {
            throw new Error("Could not find books");
        }
        return response.json
    })
    .then((data) => {
        console.log(data.books);
        setBooks(data.books);
        setLoading(false);
    })
    .catch((err) => {
        console.error("Error finding Books:", err);
        setError("Could not load books. Try again soon")
        setLoading(false);
    });
}, []);

const handleSearchChange =(e) => {
    setSearchQuery(e.target.value);
};

if (loading) return <div> Finding Books</div>
if (error) return <div style={{color:"green"}}>{error}</div>;

return (
    <div>
        <h1>Books Available in Library</h1>

        <input
        type="text"
        placeholder="Find Books"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{padding:"10px", width: "300px"}}
        />
        <ul>
            {books && books.length > 0 ? (
                books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>
                        </Link>
                        <img src="book.coverimage" alt="book.title"/>
                    </li>
                ))
            ) : (
                <p>Cannot find any books matching your search</p>
            )}
        </ul>
    </div>
);

export default Books;