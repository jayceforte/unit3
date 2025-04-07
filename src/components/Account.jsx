import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Account = () =>{
const [userInfo, setUserInfo] = useState(null);
const [checkedOutBooks, setCheckedOutBooks] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const navigate = useNavigate();

const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
{
    headers: {
        "Content-Type": "application/json",
        Auth: `Bearer ${token}`,
    },
}
    );
    const result = await response.json();
    console.log(result);
    setUserInfo(result);
};
useEffect(() => {
    getUserInfo();
}, []);
return(
    <div>
        <h1>Account</h1>
        {userInfo ? (
            <>
            <h2>Hello, {userInfo.username}</h2>
            <h3>Checked Out Books:</h3>
            <ul>
                {checkedOutBooks.length > 0 ? (
                    checkedOutBooks.map((book) => <li key={book.id}>{book.title}</li>)
                ) : (
                    <p>Nothing Checked out</p>
                )}
            </ul>
            </>
        ) : (
            <p>Rendering</p>
        )}
    </div>
)
}

export default Account