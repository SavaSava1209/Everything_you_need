import React from 'react';
import '../css/card.css'

const Card = ({id, email, username, name}) => {
      return(
        <div className='flipCard'>
            <div className='flipCardInner'>
                <div className='flipCardFront'>
                    <img src={`https://robohash.org/${id+100}`} alt='robot' style={{width:'100%', height:'100%'}}/>
                </div>
                <div className='flipCardBack'>
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <p>{username}</p>
                </div>
            </div>
        </div>
    )
}

export default Card