import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


export default function Navbar({ appProps:{isAuthenticated}}) {

    const authLinks = (
        <ul>
            <li><button className='btn btn-danger'>Logout</button></li>
        </ul>
    )

    const guestLinks = (
        <ul>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    )

    return (
        
        <div>
            <nav className='navbar bg-dark'>
                <h1>
                <Link to="/">Scratch</Link>
                </h1>
                {isAuthenticated ? authLinks : guestLinks }
            </nav>
        </div>
    )
}


