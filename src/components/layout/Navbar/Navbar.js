import React from 'react';
import CustomLink from './CustomLink';
import './Navbar.css'

const Navbar = () => {
    const links = [
        { href: '/', name: 'Home' },
        { href: '/link1', name: 'Link 1' },
        { href: '/link2', name: 'Link 2' }
    ]
    return (
        <div className="topNav" >
            {
                links.map(
                    r => <CustomLink {...r} />
                )
            }
        </div>
    );
}

export default Navbar;