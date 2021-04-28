import React from 'react';


const TeamCard = ({id,conference,full_name}) => {
  
    return (

        <div className='box' >
            <div >

           
            <div>
            <img src="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-1.jpg" alt="nba" height='150' width='130'></img>     
            </div> 
            <div>
                <h2>{conference}</h2>
                <p>{full_name}</p>
            </div> 
            </div>
        </div>
    );



}
 export  default TeamCard;