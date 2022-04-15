import React, { useState } from 'react'
import Phase2 from './Phase2'
import './App.css'
const Home = () => {

    const [count1, setCount]=useState(0);
    const [level, setLevel]=useState(0);

    const count= ()=>{
        setCount(count1+1);
    }

    const levelCount = ()=>{
        setLevel(level+1);
    }

    return (
        <div className="container">
        <div className="content">
        <h2>Add level: {level}</h2>
        <p>Count:{count1}</p>
        <div className="buttons">
        <button onClick={count}>count</button>
        
        </div>
        <Phase2 levelCount={levelCount}  />
        
        </div>
        </div>
        
    )
}

export default Home
