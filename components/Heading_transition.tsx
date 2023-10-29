import React, { useState, useEffect } from 'react';

function Head() {
  const [languages, setLanguages] = useState([
    'Indian Insitute of Information Technology, Lucknow',
    'भारतीय   सूचना   प्रौद्योगिकी   संस्थान, लखनऊ' ,
  ]);
  const [index, setIndex] = useState(0);

 

  return (
      <div
      className=" m-4 text-3xl transition text-center justify-center items-center"
      style={{
        opacity: 1,
        animation: 'fadeIn 3s ease-in-out',
        
      }}
    >
      
      {languages[index]}
    </div>

  );
}

export default Head;
