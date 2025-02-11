import './LoginSignup.css'
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';






export const LoginSignup = () => {
    const [action, setAction] = useState("Login");


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login" ? <div></div>:<div className="input">
                <FaUser className="react-icon" />
                <input type="text" placeholder='Digite o seu nome'/>
            </div>}
            
            <div className="input">
                <MdEmail className="react-icon" />
                <input type="email" placeholder='Digite o seu email'/>
            </div>
            <div className="input">
                <FaLock className="react-icon"/>
                <input type="password" placeholder='Digite a sua password'/>
            </div>
        </div>
        {action==="Sign Up" ? <div></div>: <div className="forgot-password">Esqueceu a sua password? <span>
            Clique aqui</span></div>}
        
    <div className="submit-container">
        <div className={action==="Login" ? "submit gray" : "submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={() =>{setAction("Login")}}>Login</div>

    </div>

    </div>
  )
}

export default LoginSignup;