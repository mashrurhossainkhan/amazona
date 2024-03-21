import React, { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <div className='custom-search' style={{marginBottom:"10px"}}>
      
      <form onChange={submitHandler}>
        
          <input
            type="text"
            name="q"
            id="q"
            className= "custom-search-input"
            placeholder='Search'
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button className="custom-search-botton" type="submit">
            <i className="fa fa-search"></i>
          </button>
      
      </form>
     
      {/*<<div className='search-flex-item'>
      <form className="search">        
       select className="danger radius_btn" name="areaSearch" id="areaSearch">
          <option value="#">Farmgate</option>
        </select> 
    
    </form>

      </div>*/} 
      {/*<div className='search-flex-item'>
        <button className="danger radius_btn">
            Advance Search
        </button>
      </div>*/}
    </div>
  );
}