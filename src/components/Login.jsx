/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react"
import './Login.css'
const Login = () => {
    const [action,setAction] = useState("Sign Up")
return(
    
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
            <input type="text" placeholder="Name" />
            </div>
            <div className="input">
            <input type="email" placeholder="Email" />
            </div>
            <div className="input">
            <input type="password" placeholder="Password" />
            </div>
        </div>
        
        <div className="submit-container">
        <div className={action ==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action ==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>

        </div>
    </div>
);

}
export default Login;