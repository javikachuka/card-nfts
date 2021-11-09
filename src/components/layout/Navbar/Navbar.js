import React, { useEffect, useState } from 'react';
import Button from '../../content/Button/Button';
import CustomLink from './CustomLink';
import './Navbar.css'
import { connect } from 'react-redux'
import { transformAddress } from '../../../utils/transformAddress';
import { doLogin, getUserLogued } from '../../../redux/auth/actions';


const Navbar = (props) => {
    const links = [
        { href: '/', name: 'Home' },
        { href: '/myNFTS', name: "My NFT's" },
        { href: '/link2', name: 'Link 2' }
    ]

    useEffect(
        () => {
            props.getUserLogued()
            console.log(props.user);
        }, []
    )

    async function connectWallet() {

        props.doLogin().then(
            res => {
                props.getUserLogued()
            }
        ).catch(
            error => {
                alert('error on connect')
            }
        )
    }

    return (
        <div className="topNav" >
            <h3>NFTS</h3>
            <div className="links" >
                {
                    links.map(
                        r => <CustomLink {...r} />
                    )
                }
            </div>
            <span>
                <Button value={props.user !== '' ? transformAddress(props.user) : "Connect"} handleClick={connectWallet} />
            </span>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user,
    loading: state.loading
})

const bindActions = dispatch => {
    return {
        doLogin: () => dispatch(doLogin()),
        getUserLogued: () => dispatch(getUserLogued())
    }
}

export default connect(mapStateToProps, bindActions)(Navbar);