
import './App.css';
import Bar from './Bar';
import Home from './Home';
import Point from './Points';



function App() {

  // const birth = 'Tomorrow is Eunita Birthday';
  // const link = 'https://www.google.com';
  return (
    <div className="App">
      <Bar />
        <div className="content">
          <Home />
        </div>
        <div className="point">
          <Point />
        </div>
    </div>

  );
}

export default App;
