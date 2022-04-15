import React, { useState } from 'react'
import Phase3 from './Phase3'


const Phase2 = ({levelCount}) => {
    const [count, setCount]=useState(0);
    const [level, setLevel]=useState(0);

    const increment = ()=>{
        setCount(count+1);
    }

    const levelCount1 = ()=> {
        setLevel(level+1);
    }

    return (
        
        <div className="content two">
          <h2>Add level: {level}</h2>
          <p>Count:{count}</p>
        
          <div className="buttons">
          <button onClick={increment}>count</button>
           <button onClick={levelCount}>Add level 1</button>
          </div>
           <Phase3 levelCount1={levelCount1} />
        
          
        </div>
      
    
    )
}

export default Phase2
