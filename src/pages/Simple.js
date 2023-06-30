import React from "react";
import { useState } from "react";

export default function Simple() {
    const [raining, setRaining] = useState("raining"); 
    //const [loading, setLoading] = useState(true);

    /* useEffect(()=> function Reload() {
        async function fetchData () {
            const data = await fetch('https://facebook.com');
            const result = await data.json;

            if(result) {
                setLoading(false)
            }
        }
    })
 */

    return (
        <div className="Simple">
            <h1 > I think it is {raining}</h1>
            <button className="button" onClick={()=>setRaining("Sun Rise")}>Click Me!</button>
        </div>
    )
}