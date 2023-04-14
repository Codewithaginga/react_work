import { useState } from "react";

const Nation = () => {

    const[nation, SetNation] = useState([
        {country:'KENYA', capital:'Nairobi', id:1},
        {country:'TANZANIA', capital:'Dodoma', id:2},
        {country:'Uganda', capital:'Kampala', id:3}

    ])
    return ( 
        <div className="nations">
            { nation.map((nations) =>(
                <div className="nation-review" key={nations.id}>
                    <h2>{nations.country}</h2>
                    <p>The capital city is {nations.capital}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Nation;