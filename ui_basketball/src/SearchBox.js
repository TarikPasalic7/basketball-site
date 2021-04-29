import React from 'react';

const SearchBox = ({searchChange}) =>{

 return(
    <div className='cntr p10'>

    
    <input type='search' placeholder='search NBA teams'  onChange={searchChange}/>
</div>
 );


};

export default SearchBox;