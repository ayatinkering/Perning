import { useState } from "react";

export const Counter =() =>{
    const [count, setCount]=useState(0); //ARRAY DESCRUTRNG, to unpack values from arr
    //initial state, can also pass arrray as inital state LAZY INSITIALISATION
    console.log("counter component renedered with count: ",count);
    const handleClick=()=>{
        setCount(count+1);
    };
    return <button onClick={handleClick}>Count: {count}</button>
    
}