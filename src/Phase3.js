import React, { useState } from 'react'
import Phase4 from './Phase4';

const Phase3 = ({levelCount1}) => {
    const [count, setCount]=useState(0);
    const [level, setLevel]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
   
    const levelCount2 = () =>{
        setLevel(level+1)
    } 


    return (
        <div className="content third">
        <h2>Add level: {level}</h2>
        <p>Count:{count}</p>
        <div className="buttons">
        <button onClick={increment}>count</button>
         
         <button onClick={levelCount1}>Add level 2</button>

         <Phase4 levelCount2={levelCount2}/>
        </div>
        </div>
    )
}

export default Phase3
