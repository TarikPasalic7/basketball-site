import React from 'react';


const TeamCard = ({id,conference,full_name}) => {
  
    return (

        <div className='bg'>
            <div>
                <h2>{conference}</h2>
                <p>{full_name}</p>
            </div>
        </div>
    );



}
 export  default TeamCard;