import React from 'react'
import {Link} from 'react-router-dom';
import './header.css';

 function Header() {
    return (
        <div>
            <h1 style={{textAlign:"center",marginBottom:"10px",fontFamily:"Impact",borderBottom:"2px solid black"}}>TODO LIST</h1>
        <div style={{textAlign:"center",fontSize:"80%"}}><Link to="/" >Home  </Link>|<Link to="/about">  About</Link></div>
        </div>
    )
}
export default Header;