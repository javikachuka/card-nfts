import React from 'react';
import { useRoute, Link } from "wouter";
import './Navbar.css'

const CustomLink = (props) => {

    const [isActive] = useRoute(props.href);

    return (
        <Link href = {props.href} >
            <a className={isActive ? "active" : ""} >{props.name}</a>
        </Link>
    );
}

export default CustomLink;