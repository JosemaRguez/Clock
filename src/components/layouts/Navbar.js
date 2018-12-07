import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'

const styles = {
    padding: '0px 0px 0px 50px', 
    color: 'green',
    backgroundColor: 'gray',
    eraseTextDecoration: {
        textDecoration: 'none',
    }
}


const Navbar = () => {
    return (
        <nav style={styles} className="topNavBar">
            <div className="container">
                <Link to='/' style={styles.eraseTextDecoration} className="brand-logo">Josema's Project</Link>
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar;