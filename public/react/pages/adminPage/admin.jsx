import React, {useState} from "react";
import './LoginSignup.css';

import user from '../pages/adminPage/user.png';
import padlock from '../pages/adminPage/padlock.png';

const LoginSignup = () => {

    const [action, setAction] = useState('Login');

    return (
        <main>
            <header>
			<a href="#" class="logo">
			<h1>CELC Inc.</h1></a>
		<ul class="navbar">
			<li><a href="#home" class="active">Home</a></li>
			<li><Link to="/loginsignup" class= "active">Admin</Link></li>
		</ul>

		<div class="icons">
			<img src={search}/>
			<a href="#">search</a>
			<img src={cart}/>
			<a href="#">cart</a>
		</div>
		</header>
          <div className="container">
            <div className= "header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className="input">
                 <img src={user} alt="" />
                 <input type="text" placeholder='Username' />
                 </div>}
            <div className="input">
            <img src={padlock} alt=""/>
            <input type="password" placeholder='Password'/>
            </div>
            </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div>
        </main>
    )
}

export default LoginSignup;