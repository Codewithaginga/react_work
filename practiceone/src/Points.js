import { useState } from "react";


const Point = () => {
    const [game1, setGame1] = useState('2:0');

    const [sport, SetSport] = useState('Soccer');

    const tap = () => {
        setGame1('4:3');
        SetSport('Football');
    }

    return(
        <div>
            <h1>Results</h1>
            <p>{ game1} for {sport}</p>
            <button onClick={tap}>TAP HERE</button>
        </div>
    )
}

export default Point;