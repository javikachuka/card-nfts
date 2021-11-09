import React from 'react';
import '../container.css'
import './Detail.css'

import image2 from  '../../../images/unnamed2.png'
import Button from '../Button/Button';

const Detail = (props) => {
    const { image } = props
    return (
        <div className="container-show" >
            <h3>Title NFT #6659</h3>
            <div className="card-info" >

                <img className="item-image" src={image ? image : image2} alt="NFT" />

                <div className="card-footer" >
                    <Button value="Buy" handleClick={()=>console.log('clicked button')} />
                </div>

            </div>
            <div className="card-info" >
                <h4>
                    Details
                </h4>
            </div>
        </div>
    );
}

export default Detail;