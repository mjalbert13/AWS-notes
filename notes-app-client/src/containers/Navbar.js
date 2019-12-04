import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className='navbar bg-dark'>
                <h1>
                <Link to="/">Scratch</Link>
                </h1>
                <ul>
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
