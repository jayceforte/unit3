/* TODO - add your code to create a functional React component that renders a registration form */
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventdefault();
        console.log(email, password);
        const response = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/user/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, passsword}),
            }
        );
        const data = await response.json();
        console.log(data);
        if(data.token){
            localStorage.setItem("token", data.token);
            navigate("/account");
        } else {
            alert("Registration error")
        }
    };
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};
export default Register;