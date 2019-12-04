import React, {Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Auth } from 'aws-amplify';
 

export default function Navbar({ appProps:{isAuthenticated, userHasAuthenticated}}) {

    async function handleLogout() {
        await Auth.signOut();
      
        userHasAuthenticated(false);
        
    }

    const authLinks = (
        <ul>
            <li><button className='btn btn-danger' onClick={handleLogout}>Logout</button></li>
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


