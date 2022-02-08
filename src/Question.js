import React, { useState } from 'react';

const Question = ({id, title,info}) => {

    
    const [showInfo, setShowInfo] = useState(false);
  return (
      <article className='question'>
          <header>        
              <h4>{title}</h4>
              {/* // toggle button */}
              <button className='btn' onClick={()=>setShowInfo(!showInfo)}>{showInfo ? "-" : "+"}</button>
              </header> 
              {/* show info if show info is true    */}
          {showInfo && <p>{info}</p>}
      </article>
  );
};

export default Question;
