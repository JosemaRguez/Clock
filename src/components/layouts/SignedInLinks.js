import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
    ul: {
        padding: '0px 0px 0px 200px',
        textAlign: 'left',
        textDecoration: 'none'
    },
    a: {
        padding: '0px 0px 0px 100px',
        textAlign: 'left',
        textDecoration: 'none'
    }
}


const SignedInLinks = () => {
    return (
        <div style={styles.ul}>
            {/* <a><NavLink style={styles.a} to='/'>New project</NavLink></a> */}
        </div>
    )
}

export default SignedInLinks;