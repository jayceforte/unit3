/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleBook(){
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}

`)
.then((response) => {
    if (!response.ok) {
        throw new Error ("Could not fetch Book details");
    }
    return response.json();
}
)
.then((data) => {
    setBook(data);
    setIsLoading(false);
})
.catch((err) => {
    console.error("Error finding book info", err);
    setError("Unable to find book info");
    setIsLoading(false);
});
    }, [id]);

    const handleCheckout = () => {
        if (!token) {
            alert("Must log in first");
        return;
        }

        fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/checkout/${id}`,
        {
            method: "POST",
            headers: {
                Auth: `Bearer ${token}`,
            },
        }
        )
        .then((response) => response.json())
        .then((data) => {
            alert("Book has been checked out");
        })
        .catch((err) => alert("Could not check out the book"));
    };
    if (isLoading) return <div> Rendering</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <button onClick={handleCheckout}> Check This book out</button>
        </div>
    );
}

export default SingleBook;