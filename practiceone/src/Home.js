import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(35);
    }
  
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is {age} old</p>
            <button onClick={handleClick}>CLICK HERE</button>
        </div>
     );
}

export default Home;
