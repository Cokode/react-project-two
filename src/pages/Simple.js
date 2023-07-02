import React from "react";
import { useState } from "react";

export default function Simple() {
    const [raining, setRaining] = useState("raining"); 
   
    return (
        <div className="Simple">
            <h1 > I think it is {raining}</h1>
            <button className="button" onClick={()=>setRaining("Sun Rise")}>Click Me!</button>
        </div>
    )
}