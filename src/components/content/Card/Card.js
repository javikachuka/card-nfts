import React from 'react';
import './Card.css'
import Button from '../Button/Button';
import notFoud from  '../../../images/notFound.jpg'
import { useLocation } from 'wouter';

const Card = (props) => {
    const [location, setLocation] = useLocation();
    const {image, id} = props
    const handleClickCard = () => {
        console.log('clicked card');
        setLocation(`/nft/${id}`)
    }
    return ( 
        <div className="card"  >
            <div className="card-header" onClick={handleClickCard}>
                <img src={image ? image : notFoud} alt="NFT" style={{width: "100%"}} />
            </div>
            <div className="card-body">
                <p>
                    Esto es un card
                </p>
            </div>
            <div className="card-foot" >
                <Button value="Buy" handleClick={()=>console.log('clicked button')} />
            </div>
        </div>
     );
}
 
export default Card;