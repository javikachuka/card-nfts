import React from 'react';
import Card from '../Card/Card';
import '../container.css'
import {connect} from 'react-redux'
import image1 from  '../../../images/unnamed.png'
import image2 from  '../../../images/unnamed2.png'

const Home = () => {

    return (
        <div className="container" >
            <Card id={1}></Card>
            <Card image={image1} id={2} ></Card>
            <Card id={3}></Card>
            <Card image={image2} id={4}></Card>
            <Card id={5}></Card>
            <Card id={6}></Card>
            <Card id={7}></Card>
            <Card image={image2} id={8}></Card>
            <Card id={9}></Card>
            <Card image={image1} id={10} ></Card>
            <i arial-hidden="true"  ></i>
            <i arial-hidden="true"  ></i>
            <i arial-hidden="true"  ></i>
        </div>
    );
}

const mapStateToProps = state => ({
    listNfts: state.listNfts
})

const bindActions = dispatch => {
    return {}
}

export default connect(mapStateToProps,bindActions)(Home);