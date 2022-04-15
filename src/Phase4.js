import React, { useState } from 'react'

const Phase4 = ({levelCount2}) => {
      const [count, setCount]=useState(0);

      const increment=()=>{
          setCount(count+1);
      }

    return (
        <div className="content fourth">

        <p>Count:{count}</p>
        <p>above count: {count}</p>
        <div className="buttons">
        <button onClick={increment}>count</button>
         <button onClick={levelCount2}>Add level 3</button>
         <button>Add level 1</button>
        </div>
        </div>
        
    )
}

export default Phase4
